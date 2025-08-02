import mongoose ,{Schema} from "mongoose";


const AdminSchema = new Schema(
    {
      name: {
        type: String,
        trim: true
      }
    },
    {
        timestamps: true,
    }
)

export const Admin = mongoose.model("Admin", AdminSchema)