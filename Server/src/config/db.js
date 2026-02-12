const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/project-ecommerce");
//         console.log("MongoDB Connected Successfully!");
//     } catch (err) {
//         console.error("Error:", err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

// Use a variable outside the function to store the connection state

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

/** 
 * Global is used here to maintain a cached connection across hot-reloads in development
 * and function invocations in Vercel.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Turn off Mongoose buffering!
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

module.exports = dbConnect;