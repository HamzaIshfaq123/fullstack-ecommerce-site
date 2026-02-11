require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes
const Product = require("./src/models/product.model")

const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { setUser } = require('./service/auth')

const app = express();

// Add this to check if your env is actually loading
// console.log("DB URI check:", process.env.MONGO_URI ? "Found" : "Missing");

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

// route for handling signup
// app.post("/register", [
//   // Validation Middleware
//   body('email').isEmail().withMessage('Enter a valid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars'),
//   body('firstName').notEmpty().withMessage('First name is required')
// ], async (req, res) => {
  
//   // 1. Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // 2. Check if user already exists
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "Email already in use" });

//     // 3. Hash Password & Save
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await userModel.create({
//       name: `${firstName} ${lastName}`,
//       email,
//       password: hashedPassword
//     });

//     // 4. Generate Token (using your existing setUser function)
//     const token = setUser(newUser);
//     res.status(201).json({ token, message: "User created successfully" });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // 1. Basic Validation
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 3. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = await User.create({
      first_name: `${first_name}`,
      last_name: `${last_name}`,
      email,
      password: hashedPassword
    });

    // 5. Generate JWT (Stateless Auth)
    const token = setUser(newUser);

    // 6. Send response (React will receive this)
    res.status(201).json({ 
      token, 
      user: { id: newUser._id, name: newUser.name } 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
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