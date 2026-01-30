const express = require("express");
const connectDB = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes
const Product = require("./src/models/product.model")

const app = express();
connectDB(); // Execute the connection

app.use(express.json());

const cors = require("cors")

app.use(
    cors({
        origin: ['http://localhost:5173'],
    })
)

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

app.listen(3000, () => console.log("Server running on port 3000"));