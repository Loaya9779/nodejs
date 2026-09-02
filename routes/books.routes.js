const express = require("express");

const {
    authenticate,
    authorizeAdmin,
} = require("../middleware/auth.middleware");

const {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
} = require("../controller/books.controller");
const router = express.Router();


router.get("/", getAllBooks);


router.post("/", authenticate, createBook);


router.delete(
    "/:id",
    authenticate,
    authorizeAdmin,
    deleteBook
);

router.get("/:id", getBookById);

module.exports = router;