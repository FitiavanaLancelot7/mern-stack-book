import express from "express";
import "dotenv/config";
import connectDB from "./backend/db/connectDB.js";


const { PORT, MONGODB_URI } = process.env;

const App = express();



App.post('/book/create', (req,res) => {
    res.send('ready');
});





connectDB(MONGODB_URI);
// App.listen(PORT, () => {
//     console.log(`The port is listining on ${PORT}`);
// })