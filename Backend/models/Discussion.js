import mongoose from "mongoose";

const DiscussionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: String,
    projectType: String,
    budget: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    services: { type: [String], required: true },
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Discussion ||
  mongoose.model("Discussion", DiscussionSchema);
