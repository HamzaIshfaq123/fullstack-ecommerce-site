const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./src/models/category.model'); // Adjust path to your model

dotenv.config();

// 1. Connect to Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding..."))
  .catch(err => console.log(err));

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    image: "/images/shop01.png",
    description: "Latest gadgets and electronic devices."
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: "/images/shop02.png",
    description: "Trendy clothing and apparel for all seasons."
  },
  {
    name: "Home & Garden",
    slug: "home-garden",
    image: "/images/shop03.png",
    description: "Furniture and decor for your living space."
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/images/shop01.png", // Mixing the images as requested
    description: "Watches, bags, and jewelry."
  },
  {
    name: "Appliances",
    slug: "appliances",
    image: "/images/shop02.png",
    description: "High-quality home and kitchen appliances."
  }
];

const seedDB = async () => {
  try {
    // 2. Clear existing categories
    await Category.deleteMany({});
    console.log("Old categories removed.");

    // 3. Insert new categories
    await Category.insertMany(categories);
    console.log("Categories Seeded Successfully!");

    // 4. Close connection
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedDB();