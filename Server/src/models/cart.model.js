const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  // THE "FOREIGN KEY":
  // Instead of an INT ID, we store the MongoDB ObjectId.
  // 'ref' tells Mongoose: "This ID belongs to a document in the 'User' collection."
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    unique: true // Ensures 1 user cannot have 2 different cart documents
  },

  // THE "ARRAY OF OBJECTS":
  // In MySQL, you'd need a separate 'cart_items' table.
  // In MongoDB, we "nest" the items directly inside the cart document.
  items: [
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', // Points to your Product collection
        required: true 
      },
      quantity: { 
        type: Number, 
        default: 1,
        min: 1 
      }
    }
  ],
  
  // METADATA:
  // Automatically tracks when the user last modified their cart.
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// THE EXPORT:
// This creates the 'Carts' collection in your DB and makes it usable in your code.
module.exports = mongoose.model('Cart', cartSchema);