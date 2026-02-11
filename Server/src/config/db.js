const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/project-ecommerce");
//         console.log("MongoDB Connected Successfully!");
//     } catch (err) {
//         console.error("Error:", err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

// Use a variable outside the function to store the connection state
let isConnected = false;

const connectDB = async () => {
    // If already connected, return immediately
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }

    try {
        console.log("Connecting to MongoDB...");
        const db = await mongoose.connect(process.env.MONGO_URI, {
            // Options to prevent buffering and long timeouts on Vercel
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000, 
        });

        isConnected = db.connections[0].readyState;
        console.log(`MongoDB Connected: ${db.connection.host}`);
    } catch (err) {
        console.error("MongoDB Connection Error:", err.message);
        // Important for Vercel: throw the error so the route knows it failed
        throw new Error("Database connection failed");
    }
};

module.exports = connectDB;