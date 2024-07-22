import mongoose from "mongoose";

const noticiasSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
  imageUrl: { type: String },
});

export default mongoose.model('Noticias', noticiasSchema);