import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// cuando usamos async le decimos a typescript que usaremos código
// asíncrono
const connectDB = async ():Promise<void> => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined");
        }

        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1)
    }
};

export default connectDB;