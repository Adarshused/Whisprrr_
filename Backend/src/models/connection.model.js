import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const ConnectionSchema = new Schema(
    {
       following: {
        type: Array,
       }
    }
)