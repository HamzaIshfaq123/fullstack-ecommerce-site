const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Extra safety check: ensures req.cookies exists
  if (!req.cookies) {
    console.error("Cookie-parser is not initialized!");
    return res.status(500).json({ message: "Server Configuration Error" });
  }

  // 1. Get token from the cookies directly
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

  // 2. Verify the token against your secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err) return res.status(403).json({ message: "Invalid or Expired Token" });
    
    // 3. Attach user info to the request so the route can use it (e.g., req.user.id)
    req.user = decodedUser; 
    next(); // Move to the actual route logic
  });
};

module.exports = authenticateToken;