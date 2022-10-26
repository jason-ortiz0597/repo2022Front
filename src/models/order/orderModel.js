import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    // products: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product'
    // }],

    // quantity: [{
    //     type: Number,
    //     required: true
    // }],


    order: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    
    
    // entry: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Entries",
    //     required: true,
    // },


  
    // price: {
    //     type: mongoose.Schema.Types.Decimal128,
    //     required: true
    // },

    // date: {
    //     type: Date,
    //     default: Date.now
        
    // },

    

    


},
{
    timestamps: true,
    versionKey: false

});

export default mongoose.model("Order", orderSchema);




















