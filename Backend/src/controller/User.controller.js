import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { Faculty } from '../models/faculty.model.js';
import {ApiResponse} from '../utils/ApiResponse.js'
import { redis } from '../utils/redis.js';
import mongoose from 'mongoose';
import { access } from 'fs';

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
//    console.log(req)
   if([email,organizationID,password].some((field)=>field?.trim() === ""))
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
//    console.log(accessToken, refreshToken)
   const LoggedInUser = await Faculty.findById(user._id).select(
    "-password -refreshToken"
   )
   const userID = user._id
   const rediskey = `user:${userID}`;

   const Cached = await redis.set(rediskey, LoggedInUser)
   if(!Cached) {
    throw new ApiError(500,"Their was problem while Caching user")
   }
   const option = {
        httpOnly : true,
        secure : true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, 
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken,option)
    .cookie("refreshToken", refreshToken, option)
    .json( new ApiResponse(200, {user: LoggedInUser, accessToken, refreshToken},"User logged in successfully"))
}) 


const AvatarUser = AsyncHandler(async (req, res)=>{
     const user_Id = req.user._id
    //   console.log(req)

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
     .json(new ApiResponse(200,{user: avatar.url}, "file uploaded successfully"))
})

const Logout = AsyncHandler(async (req, res) => {
    await Faculty.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken : 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200,"User Logged out"))
})

const UserData = AsyncHandler(async (req, res) => {
    const userID = req.user._id
    let User;
    const topN = 10
    const redisKey = `user:${userID}`;
    const Cached = await redis.get(redisKey)
    // console.log(Cached)
    
    if(Cached) {
        try{
            // console.log(typeof Cached)
          User = JSON.parse(Cached)
          console.log("✅ Parsed object:", User)
        }
        catch(err) {
           console.error("❌ JSON.parse failed on:", Cached)
            throw err
        }
       
    }
    else {
       User =  await Faculty.aggregate([
          {$match : 
            { _id: req.user._id}
        },
            {
                $lookup:{
                    from: "upvotes",
                    localField: "_id",
                    foreignField: "faculty",
                    as: "upvoteDocs"
                }
            },
            {
            $set: {
            totalUpvote: { $size: "$upvoteDocs"}
           }
           },
           {
              $project: {
              displayname:         1,
              email:               1,
              firstname:           1,
              avatar:              1,
              dob:                 1,
              country_residence:   1,
              title:               1,
              about:               1,
              address:             1,
              experience:          1,
              totalUpvote:         1,
              upvote:              1,
        }
      }
        ]);
        User._id = String(User._id)
        await redis.set(redisKey,JSON.stringify(User), "EX", 60 * 5  )
    }
    
    const raw = await redis.zrevrange('users:byUpvotes', 0, topN - 1, 'WITHSCORES');
    const leaderBoard = []
    for(let i = 0; i < raw.length; i += 2) {
        const faculty = await Faculty.findById(raw[i])
        leaderBoard.push({
            id: raw[i],
            score: Number(raw[i + 1]),
            username: faculty.displayname,
            Title: faculty.title,
            Avatar: faculty.avatar,
        })
    }
   return res
   .status(200)
   .json(new ApiResponse(200, {user: User,leaderboard: leaderBoard},"Fetched user data"))
})

export {AvatarUser, RegisterFaculty, LoginFaculty, UserData,Logout}
