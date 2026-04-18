// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const adminSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   passwordHash: { type: String, required: true } // must match MongoDB field
// });

// adminSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.passwordHash);
// };

// export default mongoose.model("Admin", adminSchema);


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
