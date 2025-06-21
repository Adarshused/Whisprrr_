import mongoose, {Schema} from "mongoose"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
// import { Upvotes } from './upvotes.model.js'

const facultySchema = new Schema(
    {
      displayname: {
        type: String, 
      },
      email: {
        type: String,
        unique: true,
        trim: true,
      },
      firstname: {
        type: String,
        trim: true,
      },
      avatar: {
        type: String,

      },
      organizationID: {
        type: String,
        required: true
      },
      dob: {
        type: String
      },
      country_residence: {
        type: String
      },
      upvote: {
        type: Schema.Types.ObjectId,
        ref: "Upvotes"
      },
      title: {
        type: String,
        require: true,
      },
      about: {
        type: String,
        require: true
      },
      address: {
        type: String,
        require: true,
      },
      connection: {
        type: Schema.Types.ObjectId,
        ref:"Connections"
      },
      experience: {
        type: String,
      },
      password:{
        type: String,
        require: [ true, 'password is required']
      },
      notification:{
      type: Schema.Types.ObjectId,
      ref:"Notification"
      },
      refreshToken: {
        type: String,
      }
    },
    {
        timestamps: true
    }
)

facultySchema.pre("save", async function (next) {
   if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

facultySchema.methods.isPasswordValid = async function (pass) {
     return await bcrypt.compare(pass, this.password)
}

facultySchema.methods.generateAccessToken = function () {
        return jwt.sign(
            {
                _id : this._id, // comes from mongodb
                email : this.email,
                name : this.name,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }

    facultySchema.methods.generateRefreshToken = function () { 
        return jwt.sign(
            {
                _id : this._id, // comes from mongodb
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }

export const Faculty = mongoose.model("Faculty",facultySchema)