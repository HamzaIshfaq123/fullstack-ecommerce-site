const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice_project_1");
        console.log("MongoDB Connected Successfully!");
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;