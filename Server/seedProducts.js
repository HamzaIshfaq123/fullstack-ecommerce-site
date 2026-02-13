require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/product.model');

// 1. Generate a valid MongoDB ObjectId to act as your "Store"
const DUMMY_STORE_ID = new mongoose.Types.ObjectId();

const seedData = [
  { name: "Digital SLR Camera", category: "Cameras", image: "/images/product01.png", price: 450, is_new: true },
  { name: "Pro Gaming Laptop", category: "Laptops", image: "/images/product02.png", price: 1200, is_new: true },
  { name: "Noise Cancelling Headphones", category: "Accessories", image: "/images/product03.png", price: 150, is_new: false },
  { name: "Wireless Gaming Mouse", category: "Accessories", image: "/images/product04.png", price: 60, is_new: false },
  { name: "Mechanical Keyboard", category: "Accessories", image: "/images/product05.png", price: 110, is_new: true },
  { name: "4K LED Monitor", category: "Electronics", image: "/images/product06.png", price: 300, is_new: false },
  { name: "External SSD 1TB", category: "Electronics", image: "/images/product07.png", price: 130, is_new: false },
  { name: "Smartphone Flagship", category: "Smartphones", image: "/images/product08.png", price: 899, is_new: true },
  { name: "Smart Watch Series X", category: "Electronics", image: "/images/product09.png", price: 250, is_new: true }
];

const fullInventory = [];
for (let i = 0; i < 20; i++) {
  const baseItem = seedData[i % seedData.length];
  
  // Calculate a fake "old price" for the discount look
  const oldPrice = Math.floor(baseItem.price * 1.3);

  fullInventory.push({
    store_id: DUMMY_STORE_ID, // Matches your 'ref: Store' requirement
    name: `${baseItem.name} ${Math.floor(i / 9) + 1}`,
    category: baseItem.category,
    price: baseItem.price,
    old_price: oldPrice,
    discount_pct: 30,
    is_new: baseItem.is_new,
    sales_count: Math.floor(Math.random() * 500), // Randomly assign sales
    rating: Math.floor(Math.random() * 2) + 4, // Random 4 or 5 stars
    images: [baseItem.image],
    stock: 20,
    description: "This is a premium product designed for high performance and durability. Perfect for your daily needs.",
  });
}

const runSeeder = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log("Clearing old products...");
    await Product.deleteMany({});

    console.log(`Inserting ${fullInventory.length} products...`);
    await Product.insertMany(fullInventory);

    console.log("Database Seeded Successfully! Check Atlas now.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

runSeeder();