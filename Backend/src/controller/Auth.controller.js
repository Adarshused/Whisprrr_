import { Faculty } from '../models/faculty.model.js'
import { Upvotes } from '../models/upvotes.model.js'
import { ApiError } from '../utils/ApiError.js'
import { redis } from '../utils/redis.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { AsyncHandler } from '../utils/AsyncHandler.js'
import mongoose from 'mongoose'


const Auth = AsyncHandler(async (req, res) => {

      const redirectUri = "http://localhost:8000/api/v1/auth/google/callback";
    //   const client 
})