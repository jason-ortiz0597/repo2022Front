import mongoose from "mongoose";

// entries model inventory
const entriesSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    typeEntries: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeEntries",
        required: true
    },
    

    quantity: {
        type: Number
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
        type: Number
        
    },

    total : {
        type: Number,
        default: 0
    },

   /* excess: {
        type: Number,
        default: 0
    },*/


    
},
{

    timestamps: true,
    versionKey: false
});

export default mongoose.model("Entries", entriesSchema);