import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
    mongoose.connect(MONGO_URI);
    console.log('Connected to database');
}
export default connectDB;