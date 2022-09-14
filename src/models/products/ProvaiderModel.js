import mongoose from "mongoose";

const ProvaiderSchema = new mongoose.Schema({

    legalReason: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
    },
    typeProvaider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeProvaider",
        required: true
    },
    contact: {
        type: String
    },
    phoneContact: {
        type: String
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

export default mongoose.model("Provaider", ProvaiderSchema);


