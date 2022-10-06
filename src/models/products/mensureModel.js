import mongoose from "mongoose";

const measureSchema = new mongoose.Schema({

    relation: {
        type: Number,
        required: true,
        trim: true
    },

    unit: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit"
    }],
    
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Measure", measureSchema);