import mongoose from "mongoose";

const pyqSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  semester: { type: String, required: true },
  year: { type: String, required: true },
  pdfUrl: { type: String, required: true }, // store PDF URL or path
});

export default mongoose.model("Pyq", pyqSchema);

