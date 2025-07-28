import dotenv from 'dotenv'
import { connectDB } from './db/database.js'
import { redis } from './utils/redis.js'
import {fetchAllUsersFromDB} from './db/database.js'
import {app} from './app.js'
dotenv.config({
    path:'./env'
})


redis.on('error',err => {
    console.error('⚠️ Redis error:', err)
})
connectDB()
async function preloadCache() {
    
 const users = await  fetchAllUsersFromDB();
 const rawUsers = users.map(u => u.toObject ? u.toObject() : u);
//  console.log(typeof users)
 const pipeline = redis.pipeline();
 for(const u of rawUsers) {
    u._id = String(u._id)
    const key = `user:${u._id}`;
    const score = u.totalUpvote;
    const val = JSON.stringify(u);
    pipeline.set(key, val);
    pipeline.zadd("users:byupvotes", score, u._id )
    // MISTAKE -> here after converting the userObj into string im still trying to access it like document file
    // let userObj = {...user}
    // userObj._id = String(userObj._id)
    // userObj = JSON.stringify(userObj)
    // // userObj.totalUpvote = String(userObj.totalUpvote)
    // // console.log(userObj)
    // pipeline.set(`user:${userObj.id}`,userObj);
    // // add the user upvotes in sorted set
   
    // pipeline.zadd(
    //     'users:byUpvotes',
    //     userObj.totalUpvote,
    //     userObj._id
    // );
 }

  const result = await pipeline.exec();
 const user = await redis.zrevrange('users:byUpvotes',0,1);
console.log(`🌡️   Preloaded ${users.length} users into Redis`)
}
await redis.flushdb();
preloadCache()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
         console.log(`⚙️   Server is running on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Connection failed :", err)
})