const express = require("express");
const connectDB = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes
const Product = require("./src/models/product.model")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

require('dotenv').config();

connectDB(); // Execute the connection

app.use(express.json());

const cors = require("cors")

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

// previous code for local connection
// app.use(
//     cors({
//         origin: ['http://localhost:5173'],
//     })
// )

// new code for mongodb cluster
app.use(
    cors({
        // Add your Vercel frontend URL here
        origin: ['http://localhost:5173', 'https://fullstack-ecommerce-site-drab.vercel.app'],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

// READ (Get all users)
app.get("/users", async (req, res) => {
  try {
    // .find({}) is the MongoDB equivalent of "SELECT * FROM users"
    const results = await User.find({}); 
    
    // Send JSON response
    res.json({ users: results }); 
    
    // Note: If you want to render an EJS page instead, use:
    // res.render("users", { users: results });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Read all Products
app.get("/api/products", async (req, res) => {
  try {
    // .find({}) is the MongoDB equivalent of "SELECT * FROM users"
    const results = await Product.find({}); 
    
    // Send JSON response
    res.json({ products: results }); 
    
    // Note: If you want to render an EJS page instead, use:
    // res.render("users", { users: results });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// commenting this old line for local env out
//  app.listen(3000, () => console.log("Server running on port 3000"));

// new code for vercel 
// This allows local testing but won't crash on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log("Server running on port 3000"));
}

// You MUST export the app for Vercel to pick it up
module.exports = app;