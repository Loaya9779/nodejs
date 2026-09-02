const Book = require("../models/book.model");


const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();

        return res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};


const createBook = async (req, res, next) => {
    try {
        const { title, author, price } = req.body;

        if (!title || !author || !price) {
            return res.status(400).json({
                message: "Title, author and price are required",
            });
        }

        const book = await Book.create({
            title,
            author,
            price,
        });

        return res.status(201).json({
            message: "Book created successfully",
            book,
        });
    } catch (error) {
        next(error);
    }
};



const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        return res.status(200).json({
            message: "Book deleted successfully",
            book,
        });
    } catch (error) {
        next(error);
    }
};

const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
};