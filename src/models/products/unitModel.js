import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,
        trim: true,
        maxlength: 50
        
    },

    abreviation: {

        type: String,
        required: true,
        trim: true,
        maxlength: 10

    },

},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Unit", unitSchema);