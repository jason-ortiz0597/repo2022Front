import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    
    entry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entries",
        required: true,
    },


    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
        
    },

    

    


},
{
    timestamps: true,
    versionKey: false

});

export default mongoose.model("Order", orderSchema);




















