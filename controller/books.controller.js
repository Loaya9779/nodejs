const Book = require("../models/book.model");

// GET /books
const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

// GET /books/:id
const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// POST /books
const createBook = async (req, res, next) => {
    try {
        const { title, author, price } = req.body;

        const book = await Book.create({
            title,
            author,
            price
        });

        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};

// PUT /books/:id
const updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// DELETE /books/:id
const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};