const express = require("express");

const Book = require("../models/book.model");

const {
    authenticate,
    authorizeAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();


/*
================================
GET /books
Public
================================
*/

router.get("/", async (req, res, next) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
});


/*
================================
POST /books
Authenticated Users Only
================================
*/

router.post("/", authenticate, async (req, res, next) => {
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

        res.status(201).json({
            message: "Book created successfully",
            book,
        });

    } catch (error) {
        next(error);
    }
});


/*
================================
DELETE /books/:id
Admin Only
================================
*/

router.delete(
    "/:id",
    authenticate,
    authorizeAdmin,
    async (req, res, next) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);

            if (!book) {
                return res.status(404).json({
                    message: "Book not found",
                });
            }

            res.status(200).json({
                message: "Book deleted successfully",
                book,
            });

        } catch (error) {
            next(error);
        }
    }
);


module.exports = router;