


import express from "express";
import {
  createPyq,
  getAllPyqs,
  deletePyq,
} from "../controllers/pyqController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ---- PUBLIC GET: all PYQs ----
router.get("/", getAllPyqs); // no `protect` middleware

// ---- ADMIN ROUTES ----
router.post("/", protect, upload.single("pdf"), createPyq);
router.delete("/:id", protect, deletePyq);

export default router;
