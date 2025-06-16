import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { Faculty } from '../models/faculty.model.js';
import {ApiResponse} from '../utils/ApiResponse.js'

const generateAccessTokenAndRefreshToken = async(userID) => {
try{
   const user = await Faculty.findById(userID)
   
   const accessToken = user.generateAccessToken()
   const refreshToken = user.generateRefreshToken()
   
   user.refreshToken = refreshToken
   await user.save({ validateBeforeSave : false})
  
   return {accessToken, refreshToken}
}
catch (err) {
    throw new ApiError(500, "Something went wrong")
}
}

const RegisterFaculty = AsyncHandler(async (req, res)=>{
//    db.faculties.deleteMany({ displayname: null })
    const {name, email, organizationID,password} = req.body
    //    console.log(req.body)
    // Faculty.getIndexes()
    if([name, email,organizationID, password].some((field)=>field?.trim === "")){
        throw new ApiError(400,"all fields are required")
    }
    const existedUser = await Faculty.findOne({
        $or :[
            {email},
            {organizationID}
        ]
    })
    if(existedUser)
        throw new ApiError(409, "User with email or username already exists")
   
    const user = await Faculty.create({
        name,
        email,
        organizationID,
        password
    })
    const created_user = await Faculty.findById(user._id).select(
        "-password"
    )
    if(!created_user)
        throw new ApiError(500, "Something went wrong while creating user")
    return res.status(201).json(
        new ApiResponse(200, "User Created Successfully")
    )
})

const LoginFaculty = AsyncHandler(async (req,res)=>{
   const {email,organizationID, password} = req.body

   if([email,organizationID,password].some((field)=>field?.trim === ""))
    throw new ApiError(400, "all fields are required")

   const user = await Faculty.findOne({
    email,
    organizationID,
   })
    
   if(!user) 
    throw new ApiError(401, "User does not exits")
   
   const isPasswordValid = await user.isPasswordValid(password)
   if(!isPasswordValid)
    throw new ApiError(401, "Invalid User Credentials")

   const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(user._id)
   const LoggedInUser = await Faculty.findById(user._id).select(
    "-password -refreshToken"
   )
   const option = {
        httpOnly : true,
        secure : true
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken,option)
    .cookie("refreshToken", refreshToken, option)
    .json( new ApiResponse(200, {user: LoggedInUser, accessToken, refreshToken},"User logged in successfully"))
}) 


const AvatarUser = AsyncHandler(async (req, res)=>{
     const user_Id = req.user._id
     const AvatarLocalPath = req.files?.avatar[0]?.path;
     if(!AvatarLocalPath) 
        throw new ApiError(400, "Avatar file is empty")

     const avatar = await uploadOnCloudinary(AvatarLocalPath)

     await Faculty.findByIdAndUpdate(
        user_Id,
        {
            $set:{
                avatar : avatar.url
            }
        },
        {
            new:true
        }
     )
     const option = {
        httpOnly : true,
        secure: true,
     }

     return res
     .status(200)
     .json(new ApiResponse(200, "file uploaded successfully"))
})

export {AvatarUser, RegisterFaculty, LoginFaculty}
