const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://loayadel96_db_user:NjXsC1SqPUB64odi@cluster0.wiizy7e.mongodb.net/bookstore?appName=Cluster0"
        );

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;