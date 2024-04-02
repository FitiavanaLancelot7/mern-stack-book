import express from 'express';
import Book from '../models/bookModels.js';


const router = express.Router();


// Route of saving
router.post('/', async (req, res) => {
    const { title, author, publishYear } = req.body;
    try {
        if(!title || !author || !publishYear){
            return res.status(400).send({
                message: 'Send all required field: title, author, publisherYear'
            });
        }
        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear,
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);   
        res.status(500).send({ message: error.message });
    }
})

// Route for Get All Books from database
router.get('/', async (req, res)=>{
    try {
        const books = await Book.find({});
        return res.status(201).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
})

// Route for Get one Book from database by id
router.get('/:id', async (req, res)=>{
    try {
        const { id } = req.params;

        const books = await Book.findById(id);
        if(!books){
            return res.status(404).send({ message: "Book not found ❌" });
        }
        return res.status(201).send(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
})


// Route for update a Book from a database
router.put('/:id', async (req, res)=>{
    try {
        const { id } = req.params;

        const { title, author, publishYear } = req.body;
        if(!title || !author || !publishYear) {
            return res.status(400).send({message: 'Send all required field: title, author, publisherYear 🚫'});}
            const result = await Book.findByIdAndUpdate(id, req.body);

            if(!result){
                return res.status(404).json({
                    message: 'Book not found ❌'
                })
            }

            return res.status(200).send({
                message: 'Book updated succesfully ✅'
            })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        })
    }
})

// Route for Delete book

router.delete('/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({ message: 'Book not found ❌' });
        }
        return res.status(200).send({ message: 'Book deleted successfuly ✅' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

export default router;