const express = require("express");
const connectDB = require("./src/config/db");
const User = require("./src/models/user.model"); // Import to use in routes

const app = express();
connectDB(); // Execute the connection

app.use(express.json());

// Example Route
app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));