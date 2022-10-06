import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    
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
    abreviation: {
        type: String,
        required: true,
        trim: true
    },

    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subcategory'
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

export default mongoose.model("Category", categorySchema); 