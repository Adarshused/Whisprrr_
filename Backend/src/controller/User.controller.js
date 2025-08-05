import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { Faculty } from '../models/faculty.model.js';
import { Organization } from '../models/organisation.model.js';
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
    const {name, email, organization,password} = req.body
    //    console.log(organization)
    // Faculty.getIndexes()
    if([name, email,organization, password].some((field)=>field?.trim === "")){
        throw new ApiError(400,"all fields are required")
    }
    // const existedUser = await Faculty.findOne({
    //     $or :[
    //         {email},
    //         {organization}
    //     ]
    // })
    
     /* 
              IMPORTANT NOTE THE SCHEMA NAME IS SAVED BY DEFAULT WITH ALL LETTER SMALL AND PLURAL FORM
              eg: Faculty --> faculties
     */
    const existedUser = await Organization.aggregate([
        // find the org
        {$match: {name: organization}},

        // see for only faculties in the org
        {$unwind: '$members'},
        {$match: { 'members.kind': 'Faculty' }},

        // JOIN on Faculty collection on members.item -> _id
        {
            $lookup: {
                from: "faculties",
                localField: 'members.item',
                foreignField: '_id',
                as: 'facultyDoc',
            }
        },
        {$unwind: '$facultyDoc'},

        // filter by email
        {$match: {'facultyDoc.email': email}},

        {
            $project: {
                _id: 1,
                name: 1,
                memberInfo: '$facultyDoc'
            }
        }
    ])
    // console.log(existedUser)
    if(existedUser.length > 0)
        throw new ApiError(409, "User with same email already exists in your organization")
   
    
    const user = await Faculty.create({
        name,
        email,
        organization,
        password
    })
    const created_user = await Faculty.findById(user._id).select(
        "-password"
    )
    if(!created_user)
        throw new ApiError(500, "Something went wrong while creating user")

    // push the faculty in the respective org
    const updateOrg = await Organization.findOneAndUpdate(
        {name: organization},
        {
            $push: {
                members: {
                    kind: "Faculty",    
                    item: user,
                    email: email
                }
            }
        },
        {
            new: true
        }
    )
    if(!updateOrg)
        throw new ApiError(404, "Organization not found")
    return res.status(201).json(
        new ApiResponse(200, "User Created Successfully")
    )
})

const LoginFaculty = AsyncHandler(async (req,res)=>{
   const {email,organization, password} = req.body
//    console.log(req)
   if([email,organization,password].some((field)=>field?.trim() === ""))
    throw new ApiError(400, "all fields are required")

//    const user = await Faculty.findOne({
//     email,
//     organization,
//    })
   
    const org = await Organization.findOne({name: organization})
               .populate({
                path: "members.item",
                match: {kind: 'Faculty', email},
                model: "Faculty"
               })     
               .exec();
     
   if(!org) 
    throw new ApiError(401, "Organization Not found")
//    console.log(org)
   const faculty = org.members.find(m => m.kind === 'Faculty' && m.email == email);

   if(!faculty) 
     throw new ApiError(401, "User Does not exits in the Organization")

    const user = await Faculty.findOne({
       email
    })
  
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
    let userID = req.user._id
    //   console.log(req)
    
     const AvatarLocalPath = req.files?.avatar[0]?.path;
     if(!AvatarLocalPath) 
        throw new ApiError(400, "Avatar file is empty")

     const avatar = await uploadOnCloudinary(AvatarLocalPath)
     
     await Faculty.findByIdAndUpdate(
        userID,
        {
            $set:{
                avatar : avatar.url
            }
        },
        {
            new:true
        }
     )
      const User = await Faculty.findById(userID).select(
        "-password -refreshToken"
     )
    //  userID = String(userID);
     const redisKey = userID;
    await redis.set(redisKey,JSON.stringify(User), "EX", 60 * 5  )
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
    let userID = req.user._id
    let User;
    const topN = 10
    // userID = String(userID)
    const redisKey = userID;
    const Cached = await redis.get(redisKey)
    // console.log(Cached)
    
    if(Cached) {
        // console.log("Chace HIT||")
        if (typeof Cached !== "string") {
    console.warn("Unexpected non-string from Redis:", Cached);
    await redis.del(redisKey);
     }
      else{
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
        // User._id = String(User._id)
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

const UserContact = AsyncHandler(async (req, res) => {
   let userID = req.user._id;
//    console.log(req.body)
   const displayname = String(req.body.displayname)
   const email = String(req.body.email)
  await Faculty.findByIdAndUpdate(
     userID,
    { $set:{
        displayname : displayname,
        email : email
    }   
    },
    {
        new : true,
    },
   )
   const User = await Faculty.findById(userID).select(
     "-password -refreshToken"
   )
   
   const redisKey =userID;
  await redis.set(redisKey,JSON.stringify(User), "EX", 60 * 5  )
  
   return res.
   status(200)
   .json(new ApiResponse(200, "information updated successfully"))
})
const UserInfo = AsyncHandler(async (req, res) => {
    let userID = req.user._id;
    const firstname = String(req.body.firstname);
    const lastname = String(req.body.lastname);
    const dob = String(req.body.dob);
    const cor = String(req.body.cor);

    await Faculty.findByIdAndUpdate(
        userID,
        { $set : {
            firstname : firstname,
            lastname : lastname,
            dob : dob,
            country_residence : cor,
        }
        },
        {
            new : true,
        },
    )
     const User = await Faculty.findById(userID).select(
        "-password -refreshToken"
     )
     
     const redisKey =userID;
    await redis.set(redisKey,JSON.stringify(User), "EX", 60 * 5  )
    return res
   .status(200)
   .json(new ApiResponse(200, "Contact updated successfully"))
})

const UserAbout = AsyncHandler(async (req, res) => {
    let userID = req.user._id;
    const about = String(req.body.about);

    await Faculty.findByIdAndUpdate(
        userID,
        {$set: {
            about : about
        }
    },
    {
        new: true,
    }
    )
    const User = await Faculty.findById(userID).select(
        "-password -refreshToken"
    )
    const redisKey = userID;
    await redis.set(redisKey, JSON.stringify(User), 'EX', 60 * 5)

    return res
    .status(200)
    .json(new ApiResponse(200, "About updatred successfully"))
})
const UserAddress = AsyncHandler(async (req, res) => {
    let userID = req.user._id;
    const plot = String(req.body.plot);
    const area = String(req.body.area);
    const city = String(req.body.city);
    const state = String(req.body.state);

    await Faculty.findByIdAndUpdate(
        userID,
        {$set: {
              plot: plot,
              area: area,
              city: city,
              state: state
        }
    },
    {
        new: true,
    }
    )
    const User = await Faculty.findById(userID).select(
        "-password -refreshToken"
    )
    const redisKey = userID;
    await redis.set(redisKey, JSON.stringify(User), 'EX', 60 * 5)

    return res
    .status(200)
    .json(new ApiResponse(200, "Address Updated Successfully"))
})
export {AvatarUser, RegisterFaculty, LoginFaculty, UserData,Logout,UserContact,UserInfo,UserAbout, UserAddress}
