import mongoose from "mongoose";

const payorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true, 
            
        },
        expiryMonth: {
            type: String,
            required: true,
        },
        expiryYear: {
            type: String,
            required: true,
        },
        cvv: {
             type: String,
            required: true,
        },

    },
    { timestamps: true } // Add timestamps (createdAt, updatedAt) to the schema
);

export default mongoose.model('Payor', payorSchema);