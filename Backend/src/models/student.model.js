import mongoose, {Schema} from "mongoose";


const StudentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        }
    },
    {
     timestamps: true,
    }
)

export const Student = mongoose.model("Student", StudentSchema)