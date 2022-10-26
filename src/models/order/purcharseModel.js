import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
   
        products: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true,
        },

        // totalOrder: {
        //     type: Number,
        //     required: true,
        // },

        // totalReal: {
        //     type: Number,
        //     required: true,
        // },

        // pending: {
        //     type: Number,
        //     required: true,
        // }
       
  
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Purchase", purchaseSchema);
