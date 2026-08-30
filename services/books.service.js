const books = require("../modules/books");

const getAllBooks = () => {
    return books;
};

const getBookById = (id) => {
    return books.find(book => book.id === Number(id));
};

const createBook = (bookData) => {
    const newBook = {
        id: books.length > 0
            ? books[books.length - 1].id + 1
            : 1,
        ...bookData
    };

    books.push(newBook);

    return newBook;
};

const updateBook = (id, bookData) => {
    const book = getBookById(id);

    if (!book) {
        return null;
    }

    book.title = bookData.title ?? book.title;
    book.author = bookData.author ?? book.author;
    book.price = bookData.price ?? book.price;

    return book;
};

const deleteBook = (id) => {
    const index = books.findIndex(
        book => book.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    return books.splice(index, 1)[0];
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};