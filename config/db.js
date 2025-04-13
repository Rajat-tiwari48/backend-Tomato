import mongoose from "mongoose";

export const connectDB = () => {
  console.log("MONGO_URL from env:", process.env.MONGO_URL); // 🔍 

  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendAPI1",
    })
    .then((c) => console.log("✅ Database is connected"))
    .catch((err) => console.log("❌ Database connection error:", err))
};
