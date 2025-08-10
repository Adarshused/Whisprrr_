import dotenv from 'dotenv'
import { connectDB } from './db/database.js'
import { redis } from './utils/redis.js'
import {fetchAllUsersFromDB, fetchOrgFromDB} from './db/database.js'
import {app} from './app.js'
dotenv.config({
    path:'./env'
})


redis.on('error',err => {
    console.error('⚠️ Redis error:', err)
})
connectDB()
async function preloadCache() {

 const org = await fetchOrgFromDB();
//   console.log(users)
 const orgListStr = JSON.stringify(org)
//  console.log(rawUsers)
 const pipeline = redis.pipeline();
 pipeline.set(process.env.ORG_LIST_KEY, orgListStr,'EX',3600)

}
await redis.flushdb();

await preloadCache()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
         console.log(`⚙️   Server is running on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Connection failed :", err)
})
// const topUsers = await redis.zrevrange("users:byupvotes", 0, 5, "WITHSCORES");
// console.log("Top users by upvotes:", topUsers);