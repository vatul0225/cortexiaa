const express = require("express");
const router = express.Router();
const Discussion = require("../models/Discussion");

router.post("/", async (req, res) => {
  try {
    console.log("DISCUSSION DATA:", req.body);

    const discussion = await Discussion.create(req.body);

    res.status(201).json({
      success: true,
      message: "Discussion scheduled successfully",
      data: discussion,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
