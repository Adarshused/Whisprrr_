import { Faculty } from '../models/faculty.model.js'
import {Upvotes} from '../models/upvotes.model.js'
import { ApiError } from '../utils/ApiError.js'
import { redis } from '../utils/redis.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import mongoose from 'mongoose'


const upvote = AsyncHandler(async (req, res) => {
    const recipient = req.user._id
    const voter = req.body.facultyId
   
    if (!mongoose.Types.ObjectId.isValid(voter)) {
      throw new ApiError(400,"Invalid voter")
  }
   const session = await mongoose.startSession();

    try {
      await session.withTransaction(async () => {
  
       
        //1) create the connection document (with session)
        await Upvotes.create(
          [{ recipient, voter }],
          { session }
        );
  
        await Promise.all([
          Faculty.findByIdAndUpdate(
            recipient,
            { $inc: { totalUpvote: 1 } },
            {
              new: true,
              select: "totalUpvote",
              session          
            }
          ),
        ]);
      });
  
      // transaction committed
      // fetch fresh user, update cache, return
      const User = await Faculty.findById(recipient)
        .select("-password -refreshToken");
      await redis.set(
        recipient,
        JSON.stringify(User),
        "EX",
        60 * 5
      );
  
      return res
        .status(200)
        .json(new ApiResponse(200, "Upvoted successfully"));
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(409)
          .json({ message: "Error while upvoting" });
      }
      return next(err);
    } finally {
      session.endSession();
    }
  });
  
  

export {upvote}