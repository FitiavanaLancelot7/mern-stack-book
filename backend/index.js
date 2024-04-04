import expres from "express";
import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./db/connectDB.js";
import Book from "./models/bookModels.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";


const { PORT, MONGO_URI } = process.env
const App = expres();



// Midleware for parsing request body
App.use(expres.json());
// Midleware for handling CORS policy
// Option 1: Allow All Origins with Default of cors(*)
// App.use(cors());
// Option 2: custom cors(*)
App.use(cors({
    origin: "https://lancelot-mern.vercel.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ['Content-Type'],
}))




App.get('/', (req,res)=>{
    res.status(234).send(`Welcome to MY MERN-STACK PORT ${MONGO_URI}`)
})

App.use('/books', bookRoutes);

const connectDB =  (MONGO_URI) =>{
    
        mongoose.connect(MONGO_URI);
        console.log('DB connected');

}
connectDB(MONGO_URI);

// App.listen(PORT, (req,res) => {
//     connectDB(MONGO_URI);
//     console.log(`The port is listening on ${PORT}`);
//     });





