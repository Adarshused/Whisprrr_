import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
import { Faculty } from '../models/faculty.model.js';
import { ApiError } from '../utils/ApiError.js';

const connectDB = async () => {
    
   try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
              console.log(`\n Mongodb connected !! DB host : ${connectionInstance.connection.host}`)

    } 
    catch (error) {
    console.log("ERROR", error)
    process.exit(1)

   } 
}
const fetchAllUsersFromDB = async () => {
  try{
    const faculties = await Faculty.aggregate([
      // take all faculties
      {$match: {}},
      // locate upvotes from the upvote schema
      {
         $lookup: {
            from: "upvotes", // remember to write schema in smaller case
            localField: "_id",
            foreignField: "faculty",
            as: "upvoteDocs"
         }
      },
      // sum up the values
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
    ])
    
    return faculties
  }
  catch (err){
    console.error("ERROR occurred while loading data from db")
    throw err
  }
}

export {connectDB, fetchAllUsersFromDB}