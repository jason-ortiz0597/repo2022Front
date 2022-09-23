import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,
        trim: true
    },

    provaider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provaider'
    },

    typeProduct: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'TypeProduct'
    },

    warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Warehouse'
    },

    hallway: {
        type: String
    }, 

    shelf : {
        type: String
    },

    stock: {
        type: Number,
    },


    dateOfExpiration: {
        type: Date,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    dayMargin: {
        type: Number,
        required: true
    },
    
    image: {

        public_id: String,
        secure_url: String
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

export default mongoose.model('Product', productSchema);