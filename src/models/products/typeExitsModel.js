import mongoose from "mongoose";

const typeExitsSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'blocked', 'deleted'],
        default: 'pending'
    }
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("TypeExits", typeExitsSchema);