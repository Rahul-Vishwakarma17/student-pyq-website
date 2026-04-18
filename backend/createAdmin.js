import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const createAdmin = async () => {
  const username = "admin";
  const password = "admin123";

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAdmin = new Admin({ username, passwordHash: hashedPassword });
  await newAdmin.save();
  console.log("Admin created!");
  process.exit();
};

createAdmin();

