import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { Organization } from '../models/organisation.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { redis } from '../utils/redis.js'

const CreateOrg = AsyncHandler(async (req, res) => {
    const name = req.body.name
     console.log(name)
    const org = await Organization.create({
        name
    })

    if(!org)
        throw new ApiError(500, "Their was an error while creating the user")

    return res
    .status(200)
    .json(
        new ApiResponse(200, "Organization Created Successfully")
    )
})

const getOrg = AsyncHandler(async (req, res) => {
    let org=[];
   const Cached = await redis.get(process.env.ORG_LIST_KEY)
   if(Cached) {
    try {
       org = JSON.parse(Cached);
    }
    catch (err) {
           console.error('Failed to parse cached org list:', e);
           org = [];

    }
   
   }
   else {
        try{
            org = await Organization.distinct('name')
        
        }
       catch (err) {
         console.log("Their was problem in getting the Org from db")
       }
   }
//    console.log((org))
   return res
   .status(200)
   .json(
      new ApiResponse(200,{org},"Fetched all org")
   )
})
export {CreateOrg, getOrg}