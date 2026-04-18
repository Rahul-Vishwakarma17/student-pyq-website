

import Pyq from "../models/Pyq.js";

// Create/upload PYQ
export const createPyq = async (req, res) => {
  try {
    const { subject, semester, year } = req.body;
    if (!req.file) return res.status(400).json({ message: "PDF file is required" });

    const pdfUrl = `/uploads/${req.file.filename}`;

    const newPyq = new Pyq({ subject, semester, year, pdfUrl });
    await newPyq.save();

    res.status(201).json(newPyq);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all PYQs
export const getAllPyqs = async (req, res) => {
  try {
    const pyqs = await Pyq.find();
    res.json(pyqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete PYQ
export const deletePyq = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pyq.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "PYQ not found" });
    res.json({ message: "PYQ deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

