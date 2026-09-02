require("dotenv").config();
const express = require("express");
const booksRoutes = require("./routes/books.routes");
const authRoutes = require("./routes/auth.routes");

const logger = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const connectDB = require("./config/db");

const app = express();

const PORT = 3000;


// Connect MongoDB
connectDB();


// Middlewares
app.use(express.json());

app.use(logger);


// Static files
app.use(express.static("public"));


// About
app.get("/about", (req, res) => {
    res.status(200).send(`
        <h1>About Us</h1>
        <p>Welcome to our Book Store API.</p>
    `);
});


// Authentication
app.use("/", authRoutes);


// Books
app.use("/books", booksRoutes);


// 404
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});


// Error Handler
app.use(errorMiddleware);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});