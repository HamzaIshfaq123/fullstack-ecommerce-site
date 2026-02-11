const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET; // In production, use process.env.JWT_SECRET

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret,
    { expiresIn: "24h" } // Token expires in 1 day
  );
}

module.exports = {
  setUser,
};