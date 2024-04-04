import express from "express";
import "dotenv/config";
import connectDB from "./db/connectDB.js";


const { PORT, MONGODB_URI } = process.env;

const App = express();



App.post('/book/create', (req,res) => {
    res.send('ready');
});





connectDB(MONGODB_URI);
