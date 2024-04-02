import expres from "express";
import "dotenv/config";
import connectDB from "./db/connectDB.js";
import { Book } from "./models/bookModels.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";


const { PORT, mongoDBURL } = process.env
const App = expres();



// Midleware for parsing request body
App.use(expres.json());
// Midleware for handling CORS policy
// Option 1: Allow All Origins with Default of cors(*)
// App.use(cors());
// Option 2: custom cors(*)
App.use(cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ['Content-Type'],
}))




App.get('/', (req,res)=>{
    res.status(234).send('Welcome to MY MERN-STACK')
})

App.use('/books', bookRoutes);

App.listen(PORT, () => {
    connectDB(mongoDBURL);
    console.log(`The port is listening on ${PORT}`);
    });





