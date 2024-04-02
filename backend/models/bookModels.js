import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    },
    {
        timestamps: true
    }
);
// const schema = mongoose.Schema({type})
// const book = mongoose.model('Cat', schema)
// book.create(data)

const Book = mongoose.model('Cat', bookSchema);
export default Book;