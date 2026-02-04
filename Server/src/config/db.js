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

const connectDB = async () => {
    try {
        // Use process.env to pull the string from Vercel's settings
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        // On Vercel, we don't use process.exit(1) as it can crash the serverless function
    }
};

module.exports = connectDB;