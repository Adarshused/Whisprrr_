import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Faculty } from "./faculty.model.js";

const ConnectionSchema = new Schema(
    {
       followerID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Faculty"
       },
       followeeID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Faculty"
       }
    },
    {
        timestamps: true,
    }
)

export  const Connections = mongoose.model("Connections", ConnectionSchema)