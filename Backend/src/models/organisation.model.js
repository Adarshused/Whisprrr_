import mongoose,{Schema} from "mongoose";

const OrganizationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin"
        },
        members:[{
            kind: {
                type: String,
                required: true,
                enum: ['Faculty', 'Student', 'Admin'],
            },
            item: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "members.kind",
            }
        }],
    
    },
    {
        timestamps: true
    }
)


export const Organization = mongoose.model("Organization", OrganizationSchema)