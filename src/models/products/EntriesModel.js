import mongoose from "mongoose";

// entries model inventory
const entriesSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now   
    },

    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'blocked', 'deleted'],
        default: 'pending'
    },
    price : {
        type: Number,
        required: true
    },

    total : {
        type: Number,
        required: true
    },

    
});

export default mongoose.model("entries", entriesSchema);