import express from "express";
import "dotenv/config";
import { Book } from "./models/bookModels.js";
import connectDB from "./db/connectDB.js";

const App = express();
const PORT = 3000
const MONGO_URI = `mongodb+srv://dbTest:Azert123()@cluster0.gkvnjtd.mongodb.net/Store?retryWrites=true&w=majority`
// const { PORT, MONGO_URI } = process.env;

App.use(express.json());

App.get("/", (req,res) => {
    res.status(200).send("Welcome to the MERN STACK");
})

App.post("/book/create", async (req,res) => {
    const { title, author, publishYear } = req.body;
    const newBook = {
        title: title,
        author: author,
        publishYear: publishYear
      }
    try {
        if(!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Please provide all required fields : title, author, publishYear"
            })
        } 
        const book = await Book.create(newBook);
        // return to execute it 
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

App.get("/book", async (req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message
        })
    }
});

App.get("/book/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).send({ message: "Book not found ❌" })
        }
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

App.listen(PORT, () => {
    connectDB(MONGO_URI);
    console.log(`The port is listing on ${PORT}`);
})