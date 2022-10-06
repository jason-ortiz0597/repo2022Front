import mongoose from "mongoose";

const typeEntriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'blocked', 'deleted'],
        default: 'pending'
    },
    description: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("TypeEntries", typeEntriesSchema);
