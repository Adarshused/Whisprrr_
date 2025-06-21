import dotenv from 'dotenv'
import { connectDB } from './db/database.js'
import Redis from 'ioredis'
import {fetchAllUsersFromDB} from './db/database.js'
import {app} from './app.js'
dotenv.config({
    path:'./env'
})
const redis = new Redis({
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USERNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

redis.on('error',err => {
    console.error('⚠️ Redis error:', err)
})
connectDB()
async function preloadCache() {
 const users = await  fetchAllUsersFromDB();
 const pipeline = redis.pipeline();
 for(const user of users) {
    pipeline.set(`user:${user.id}`,JSON.stringify(user));
    // add the user upvotes in sorted set
    pipeline.zadd(
        'users:byUpvotes',
        user.totalUpvotes,
        user._id.toString()
    );
 }
 await pipeline.exec();
console.log(`🌡️    Preloaded ${users.length} users into Redis`)
}

preloadCache()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
         console.log(`⚙️   Server is running on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Connection failed :", err)
})