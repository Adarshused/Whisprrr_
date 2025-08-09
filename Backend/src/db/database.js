import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
import { Faculty } from '../models/faculty.model.js';
import { ApiError } from '../utils/ApiError.js';
import { Organization } from '../models/organisation.model.js';

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
const fetchOrgFromDB = async () => {
  try{
    const org = await Organization.distinct('name')
     return org
  }
  catch (err) {
   console.error("ERROR occurred while loading Org data from db")
   throw err
  }
 
}
const fetchAllUsersFromDB = async () => {
  try{
    const faculties = await Faculty.aggregate([
      // take all faculties
      
      {
          $project: {
                _id:               1,
              organization:        1,
              displayname:         1,
              email:               1,
              firstname:           1,
              lastname:            1,
              avatar:              1,
              dob:                 1,
              country_residence:   1,
              title:               1,
              about:               1,
              experience:          1,
              totalUpvote:         1,
              following:           1,
              followers:           1,
              plot:                1,
              state:               1,
              area:                1,
              city:                1,
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

export {connectDB, fetchAllUsersFromDB, fetchOrgFromDB}