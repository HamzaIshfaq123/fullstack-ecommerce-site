const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true, 
    unique: true 
  },
  // For URLs like /category/electronics
  slug: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  // Your DB-driven image paths (e.g., "/images/shop01.png")
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Category', categorySchema);