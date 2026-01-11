const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    budget: { type: String, required: true },
    services: [{ type: String, required: true }],
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Discussion", discussionSchema);
