import mongoose from "mongoose";

const connectDB = async (MONGO_URI) =>{
    try {
        mongoose.connect(MONGO_URI);
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;