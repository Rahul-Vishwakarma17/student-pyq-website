

// import express from "express"; 
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

// import authRoutes from "./routes/authRoutes.js";
// import pyqRoutes from "./routes/pyqRoutes.js";

// dotenv.config();   
// const app = express();  

// // For __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Serve uploads folder as static
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/pyqs", pyqRoutes);

// // Connect DB and start server
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error(err));

// app.listen(process.env.PORT, () => console.log(`✅ Server running on port ${process.env.PORT}`));

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import pyqRoutes from "./routes/pyqRoutes.js";

// Load env variables
dotenv.config();

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pyqs", pyqRoutes);

// Test route (important for deployment check)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect DB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
  });