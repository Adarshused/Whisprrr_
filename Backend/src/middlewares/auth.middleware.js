import jwt from 'jsonwebtoken'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { Faculty } from '../models/faculty.model.js'


export const verifyJWT = AsyncHandler(async (req,_,next)=>{
    try{
        
        
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
    // console.log(token)
    if(!token)
        throw new ApiError(401, "Unauthorized request")
    
    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
    const user = await Faculty.findById(decodedToken._id).select("-password -refreshToken")

    req.user = user
    next()
} catch(err) {
    throw new ApiError(401,err?.message || "Invalid access Token")
}

})   
