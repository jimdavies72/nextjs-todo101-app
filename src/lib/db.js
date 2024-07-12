import mongoose from "mongoose";

const DB_URI = process.env.MONGO_URI || "";


if (!DB_URI || DB_URI === "") {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnection = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(DB_URI, opts).then((mongoose) => {
      console.log("DB Connected")
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
};

export default dbConnection;