// import Admin from "../models/Admin.js";
// import jwt from "jsonwebtoken";

// export const loginAdmin = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ username });
//     if (!admin)
//       return res.status(401).json({ message: "Invalid username or password" });

//     const isMatch = await admin.matchPassword(password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid username or password" });

//     const token = jwt.sign(
//       { id: admin._id, username: admin.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ id: admin._id, username: admin.username, token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

import Admin from "../models/Admin.js"; // must match folder & filename
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  console.log("Received:", username, password);

  try {
    const admin = await Admin.findOne({ username });
    console.log("Found admin:", admin);

    if (!admin) return res.status(401).json({ message: "Invalid username or password" });

    const isMatch = await admin.matchPassword(password);
    console.log("Password match:", isMatch);

    if (!isMatch) return res.status(401).json({ message: "Invalid username or password" });

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ id: admin._id, username: admin.username, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


