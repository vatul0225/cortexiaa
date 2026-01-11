const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Save contact form
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email and message are required",
    });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();

    res.status(200).json({
      message: "Contact message saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});

module.exports = router;
