import mongoose, { Schema } from "mongoose";
import { Faculty } from "./faculty.model.js";


const upvoteSchema = new Schema(
    {
       faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true,
       },
       createdAt: {
        type: Date,
        default:Date.now,
        index:true
       }
    })

    export const Upvotes = mongoose.model("Upvotes",upvoteSchema)