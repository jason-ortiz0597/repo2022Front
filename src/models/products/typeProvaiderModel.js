import mongoose from "mongoose";


const typeProvaiderSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
    },

    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'blocked', 'deleted'],
        default: 'pending'

    },
    
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("TypeProvaider", typeProvaiderSchema);
