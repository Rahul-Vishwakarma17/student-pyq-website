


import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true } // match database
});

// Method to match password
adminSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.passwordHash);
};

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
