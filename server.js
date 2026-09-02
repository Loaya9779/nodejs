require("dotenv").config();

const express = require("express");

const booksRoutes = require("./routes/books.routes");
const authRoutes = require("./routes/auth.routes");

const logger = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;


connectDB();



app.use(express.json());

app.use(logger);



app.use(express.static("public"));


app.get("/about", (req, res) => {
    res.status(200).send(`
        <h1>About Us</h1>
        <p>Welcome to our Book Store API.</p>
    `);
});


app.use("/", authRoutes);


app.use("/books", booksRoutes);


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});


app.use(errorMiddleware);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});