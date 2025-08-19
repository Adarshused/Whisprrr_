import { Faculty } from '../models/faculty.model.js'
import { Upvotes } from '../models/upvotes.model.js'
import { ApiError } from '../utils/ApiError.js'
import { redis } from '../utils/redis.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import mongoose from 'mongoose'


const upvote = AsyncHandler(async (req, res) => {
  const voter = req.user._id
  const recipient = req.body.facultyId

  if (!mongoose.Types.ObjectId.isValid(voter)) {
    throw new ApiError(400, "Invalid voter")
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

const Last7days = AsyncHandler(async (req, res) => {
  const userID = req.user._id

  const TZ = 'Asia/Kolkata';

  // 1) compute year/month/day in Asia/Kolkata
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(new Date());

  const year = Number(parts.find(p => p.type === 'year').value);
  const month = Number(parts.find(p => p.type === 'month').value); // 1-12
  const day = Number(parts.find(p => p.type === 'day').value);

  // startDate = start of (today - 6 days) in UTC for that calendar date (so full 7 days)
  const startDate = new Date(Date.UTC(year, month - 1, day - 6)); // midnight UTC that corresponds to the calendar day in TZ
  const now = new Date(); // up to now

  // 2) aggregation: group by truncated day (Asia/Kolkata)
  const agg = await Upvotes.aggregate([
    {
      $match: {
        recipient: userID,
        createdAt: { $gte: startDate, $lte: now }
      }
    },

    // create day truncated to calendar day in the desired TZ
    {
      $addFields: {
        day: { $dateTrunc: { date: "$createdAt", unit: "day", timezone: TZ } }
      }
    },

    // sum per day
    {
      $group: {
        _id: "$day",
        count: { $sum: 1 }
      }
    },

    // sort by day ascending (oldest -> newest)
    { $sort: { "_id": 1 } },

    // push into an array of {day, count}
    {
      $group: {
        _id: null,
        days: { $push: { day: "$_id", count: "$count" } }
      }
    },

    { $project: { _id: 0, days: 1 } }
  ]);

  // console.log(agg[0].days)
  // 3) build a map of ISO-date -> count
  const dayCounts = new Map();
 if (agg[0] && Array.isArray(agg[0].days)) {
  for (const d of agg[0].days) {
    if (d == null || d.day == null) continue; // skip bad rows

    // use existing Date if possible, otherwise parse
    const dt = d.day instanceof Date ? d.day : new Date(d.day);

    if (isNaN(dt.getTime())) {
      console.warn('Invalid date for row:', d);
      continue;
    }

    const isoDate = dt.toISOString().slice(0, 10); // UTC YYYY-MM-DD
    dayCounts.set(isoDate, d.count);
  }
}

  //  console.log(dayCounts)
  // 4) build the last-7 dates (oldest -> newest) as UTC-midnight Date objects matching the day keys
  const last7Dates = Array.from({ length: 7 }, (_, i) => {
    // i from 0..6 -> map to day-6 .. day-0
   const s = new Date(Date.UTC(year, month - 1, day - 6 + i)).toISOString().slice(0, 10);

    return s;
  });

    console.log(last7Dates)
  // 5) create the final array of counts (oldest -> newest), filling 0 for missing days
  const last7Counts = last7Dates.map(d => dayCounts.get(d) || 0);
 
  console.log(last7Counts); // e.g. [2000,2300,4590,3424,4222,5555,3422]

 return res
 .status(200)
 .json(new ApiResponse(200, {data: last7Counts}, "Fetched user last 7 days data successfully"))
})

export { upvote, Last7days}