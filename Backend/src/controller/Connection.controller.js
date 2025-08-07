import { Faculty } from '../models/faculty.model.js'
import { ApiError } from '../utils/ApiError.js'
import { redis } from '../utils/redis.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import mongoose from 'mongoose'
import { Connections } from '../models/connection.model.js'

const Follow = AsyncHandler(async (req, res, next) => {
  const followerID = req.user._id;
  const followeeID = req.body.followee;

  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      // 1) create the connection document (with session)
      await Connections.create(
        [{ followerID, followeeID }],
        { session }
      );

      await Promise.all([
        Faculty.findByIdAndUpdate(
          followerID,
          { $inc: { following: 1 } },
          {
            new: true,
            select: "following",
            session          
          }
        ),
        Faculty.findByIdAndUpdate(
          followeeID,
          { $inc: { followers: 1 } },
          {
            new: true,
            select: "followers",
            session         
          }
        ),
      ]);
    });

    // transaction committed
    // fetch fresh user, update cache, return
    const User = await Faculty.findById(followerID)
      .select("-password -refreshToken");
    await redis.set(
      followerID.toString(),
      JSON.stringify(User),
      "EX",
      60 * 5
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "Followed successfully"));
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "Already following this user." });
    }
    // next(err);
  } finally {
    session.endSession();
  }
});

const UnFollow = AsyncHandler(async (req, res) => {
     const followerID = req.user._id;
  const followeeID = req.body.followee;

  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      // 1) create the connection document (with session)
      const deleted = await Connections.findByIdAndDelete(
        [{ followerID, followeeID }],
        { session }
      );
    if(!deleted) 
        throw new ApiError(400, "User not found")
      await Promise.all([
        Faculty.findByIdAndUpdate(
          followerID,
          { $inc: { following: -1 } },
          {
            new: true,
            select: "following",
            session          
          }
        ),
        Faculty.findByIdAndUpdate(
          followeeID,
          { $inc: { followers: -1 } },
          {
            new: true,
            select: "followers",
            session         
          }
        ),
      ]);
    });

    // transaction committed
    // fetch fresh user, update cache, return
    const User = await Faculty.findById(followerID)
      .select("-password -refreshToken");
    await redis.set(
      followerID.toString(),
      JSON.stringify(User),
      "EX",
      60 * 5
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "UnFollowed successfully"));
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "Already Unfollowed this user." });
    }
    // next(err);
  } finally {
    session.endSession();
  }
   
})

export {Follow, UnFollow}