import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods:["GET","POST","OPTIONS","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"],
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.route.js"
app.use("/api/v1/users",userRouter)

import OrgRouter from "./routes/organization.route.js"
app.use("/api/v1/admin",OrgRouter)

export {app}