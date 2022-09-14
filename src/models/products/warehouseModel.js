import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        required: true,
        enum: ["active", "deleted", "pending"],
        default: "pending"
    }
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Warehouse", warehouseSchema);