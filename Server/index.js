require('dotenv').config();
const express = require("express");
const dbConnect = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes
const Product = require("./src/models/product.model")

const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { setUser } = require('./service/auth')

const app = express();

const authenticateToken = require("./src/middlewares/auth")

dbConnect(); // Execute the connection

app.use(express.json());

const cors = require("cors")

// Middleware to protect routes
// const authenticateToken = (req, res, next) => {
//     const token = req.header('Authorization')?.split(' ')[1];
//     if (!token) return res.status(401).send('Access Denied');

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid Token');
//     }
// };

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
// app.get("/users", async (req, res) => {
//   try {
//     // .find({}) is the MongoDB equivalent of "SELECT * FROM users"
//     const results = await User.find({}); 
    
//     // Send JSON response
//     res.json({ users: results }); 
    
//     // Note: If you want to render an EJS page instead, use:
//     // res.render("users", { users: results });
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// Fetch all Products
app.get("/api/products", async (req, res) => {
  try {
    // CRITICAL: Ensure the DB is connected before calling .find()
        await dbConnect(); // Force wait for DB connection
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

// This is the route AuthContext calls to verify the token on refresh
app.get("/api/me", authenticateToken, async (req, res) => {
  try {
    await dbConnect();
    // req.user.id comes from the decoded JWT in your middleware
    const user = await User.findById(req.user.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Verify Route Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// route for handling signup
app.post("/register", async (req, res) => {
  try {
    // Ensure the DB is connected before calling .find()
    await dbConnect(); // Force wait for DB connection
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
    // Advanced Check
    if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
    }
    if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email format" });
    }

    // 3. Hash the password -- lets avoid this for now because of vercel's unexpected behavior with this
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = await User.create({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.toLowerCase().trim(),
      password: password
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

// route for handling login
app.post("/login", async (req, res) => {
  try {
    await dbConnect(); // Crucial for Vercel!
    const { email, password } = req.body;
    console.log("1. Raw Body:", req.body);

    // 1. Check if user exists
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    console.log("2. User found in DB:", user ? "YES" : "NO");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log("3. Password Match:", user.password === password ? "YES" : "NO");

    // 2. Check password 
    // (Note: Since you skipped bcrypt for now, we check the raw string)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT using your setUser helper
    const token = setUser(user);

    // 4. Send response
    res.json({
      success: true,
      token,
      user: { id: user._id, email: user.email }
    });

  } catch (error) {
    console.error("Login backend error:", error);
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