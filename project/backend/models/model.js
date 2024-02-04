import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone_no: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true, // Remove leading/trailing whitespaces from email
            lowercase: true, // Convert email to lowercase
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Add timestamps (createdAt, updatedAt) to the schema
);

export default mongoose.model('Users', userSchema);
