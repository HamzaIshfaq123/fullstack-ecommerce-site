const rateLimit = require('express-rate-limit');

// Limiter for Login: Stays active for 15 mins
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    const resetTime = req.rateLimit.resetTime;
    const msLeft = resetTime - new Date();
    
    let timeMsg;
    if (msLeft > 60000) {
      const mins = Math.ceil(msLeft / 60000);
      timeMsg = `${mins} minute${mins > 1 ? 's' : ''}`;
    } else {
      const secs = Math.ceil(msLeft / 1000);
      timeMsg = `${secs} second${secs > 1 ? 's' : ''}`;
    }

    res.status(429).json({
      message: `Too many login attempts. Please try again in ${timeMsg}.`
    });
  },
});

// Limiter for Signup: Stays active for 1 hour
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  // 🚀 The custom handler for dynamic messages
  handler: (req, res, next, options) => {
    // Calculate minutes remaining
    const resetTime = req.rateLimit.resetTime; // When the limit resets
    const now = new Date();
    const msLeft = resetTime - now;
    const minutesLeft = Math.ceil(msLeft / (1000 * 60));

    res.status(options.statusCode).json({
      message: `Account creation limit reached. Please try again in ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}.`
    });
  },
});

module.exports = { loginLimiter, registerLimiter };