import { Faculty } from '../models/faculty.model.js'
import {Upvotes} from '../models/upvotes.model.js'
import { ApiError } from '../utils/ApiError.js'
import { redis } from '../utils/redis.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import mongoose from 'mongoose'


const upvote = AsyncHandler(async (req, res) => {
    
    const {facultyId} = req.body
    const userID = req.user._id
    if (!mongoose.Types.ObjectId.isValid(facultyId)) {
      throw new ApiError(400,"Invalid Faculty Id")
  }
  const upvote = await Upvotes.create({
    faculty: facultyId,
  })

  if(!upvote)
    throw new ApiError(500, "Error while adding upvote")
   
  const updateFaculty = await Faculty.findByIdAndUpdate(
    facultyId,
    {
        $inc: {totalUpvote: 1}
    },
    {
        new: true,
        select: 'totalUpvote',
    }
  );
  if(!updateFaculty) {
    await Upvotes.findByIdAndDelete(upvote._id)
    throw new ApiError(400, "Faculty Not Found")
  }
  // add the updated upvote to the redis

  await redis.zadd(
    'users:users:byUpvotes',
    updateFaculty.totalUpvote,
    facultyId.toString()
  )

  return res
  .status(200)
  .json(new ApiResponse(200, {totalUpvote: updateFaculty.totalUpvote},"Upvoted Successfully") )
})


export {upvote}