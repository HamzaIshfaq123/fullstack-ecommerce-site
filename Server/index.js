require('dotenv').config();
const express = require("express");
const cookieParser = require('cookie-parser');
const dbConnect = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes
const Product = require("./src/models/product.model")

const { loginLimiter, registerLimiter } = require('./src/middlewares/rateLimiters');

const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { setUser } = require('./service/auth')

const app = express();

// Add this BEFORE your routes and limiters
app.set('trust proxy', 1);

const authenticateToken = require("./src/middlewares/auth")

dbConnect(); // Execute the connection

app.use(express.json());

app.use(cookieParser());
app.use((req, res, next) => {
  // console.log("Cookies present in request:", req.cookies);
  next();
});

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
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
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

// Fetch new Products for NewArrivalsSection.jsx
app.get("/api/products", async (req, res) => {
  try {
    // CRITICAL: Ensure the DB is connected before calling .find()
        await dbConnect(); // Force wait for DB connection
    // Fetch only products marked as new, sorted by newest date
    const results = await Product.find({ is_new: true })
                    .sort({ created_at: -1 }) 
                    .limit(8); // Limit to 8 items for the UI grid
    
    // Send JSON response
    res.json({ products: results }); 
    
    // Note: If you want to render an EJS page instead, use:
    // res.render("users", { users: results });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Fetch top selling products for BestSellersSection.jsx
// Inside your server.js or routes file
app.get('/api/products/top-selling', async (req, res) => {
    try {
        await dbConnect(); // Force wait for DB connection
        // Query: Find all, sort by sales_count descending, take first 8
        const topSellingProducts = await Product.find({})
            .sort({ sales_count: -1 }) 
            .limit(8);

        res.status(200).json(topSellingProducts);
    } catch (error) {
        console.error("Error fetching top selling products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// This is the route AuthContext calls to verify the token on refresh
// 1. Remove 'authenticateToken' from the arguments
app.get("/api/me", async (req, res) => {
  try {
    // 2. Check for the token manually instead of using the middleware
    const token = req.cookies.token;

    // 3. SILENT EXIT: If no token, just say "user is null" with a 200 OK
    // This stops the frontend from throwing a "Network Error" or 401
    if (!token) {
      return res.status(200).json({ user: null });
    }

    // 4. If there IS a token, verify it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    await dbConnect();
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      // Token exists but user was deleted from DB
      return res.status(200).json({ user: null });
    }

    // 5. Success!
    res.json({ user });

  } catch (error) {
    // If token is expired or fake, don't crash, just treat as guest
    console.log("Token verification failed (Guest mode)");
    res.status(200).json({ user: null });
  }
});

// route for handling signup
app.post("/register", registerLimiter , async (req, res) => {
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = await User.create({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword
    });

    // 5. Generate JWT (Stateless Auth)
    const token = setUser(newUser);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000
    });

    // 6. Send response (React will receive this)
    res.status(201).json({ 
      success: true, 
      user: { id: newUser._id, email: newUser.email, } 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// route for handling login
app.post("/login", loginLimiter , async (req, res) => {
  try {
    await dbConnect(); // Crucial for Vercel!
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    // console.log("2. User found in DB:", user ? "YES" : "NO");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // console.log("3. Password Match:", user.password === password ? "YES" : "NO");

    // 2. Check password 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT using your setUser helper
    const token = setUser(user);

    // 4. Send response
    // res.json({
    //   success: true,
    //   token,
    //   user: { id: user._id, email: user.email }
    // });

    res.cookie('token', token, {
    httpOnly: true,     // 🔒 The most important part: JS can't touch this
    secure: true,       // Only sends over HTTPS (Vercel uses HTTPS)
    sameSite: 'none',   // Required if your Backend and Frontend are on different Vercel/Render domains
    maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
  });
  // ... after res.cookie(...)
  res.status(200).json({
    success: true,
    user: { id: user._id, name: user.name, email: user.email } 
  });

  } catch (error) {
    console.error("Login backend error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0), // Sets expiration to the past to kill the cookie
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// GET /api/products/:id
app.get('/api/products/:id', async (req, res) => {
    try {
        await dbConnect(); // Force wait for DB connection
        const { id } = req.params;

        // Find the specific product and join the category data
        const product = await Product.findById(id).populate('category');

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        // Handle invalid ObjectIDs (e.g., if the ID string is the wrong length)
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: "Invalid Product ID format" });
        }
        console.error("Error fetching product details:", error);
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