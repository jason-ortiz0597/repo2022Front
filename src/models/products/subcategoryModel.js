import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true
    },
    abreviation: {
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

export default mongoose.model("Subcategory", subcategorySchema);