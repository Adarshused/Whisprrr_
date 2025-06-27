import Redis from 'ioredis'


export const redis = new Redis({
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USERNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});