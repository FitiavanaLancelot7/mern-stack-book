import mongoose from "mongoose";

const connectDB = async (mongoDBURL) =>{
    try {
        mongoose.connect(mongoDBURL);
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;