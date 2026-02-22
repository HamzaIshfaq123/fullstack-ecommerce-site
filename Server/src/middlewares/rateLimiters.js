const rateLimit = require('express-rate-limit');

// Limiter for Login: Stays active for 15 mins
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, // 5 attempts
  message: { 
    message: "Too many login attempts. Please try again after 15 minutes." 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limiter for Signup: Stays active for 1 hour
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 3, // Only 3 accounts per hour
  message: { 
    message: "Account creation limit reached. Please try again in an hour." 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { loginLimiter, registerLimiter };