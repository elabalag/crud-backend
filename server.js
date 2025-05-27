// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// MongoDB connection
const MONGO_URI = "mongodb+srv://elamuruganbalachandiran:Ela%402002@cluster0.y1kwphe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });

// Server start
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

