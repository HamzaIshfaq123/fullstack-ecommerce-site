const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // THE MULTI-TENANT KEY
    store_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Store', 
        required: true,
        index: true // Crucial for performance
    },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    old_price: { type: Number },
    discount_pct: { type: Number },
    is_new: { type: Boolean, default: false },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    images: [{ type: String }], // Array for multiple images
    stock: { type: Number, default: 0 },
    description: { type: String },
    created_at: { type: Date, default: Date.now }
});

// Compound index for faster filtering by store and category
productSchema.index({ store_id: 1, category: 1 });

module.exports = mongoose.model("Product", productSchema);