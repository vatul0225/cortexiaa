import express from "express";
import { db } from "../firebase/admin.js";

const router = express.Router();

router.post("/discussion", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      projectType,
      budget,
      date,
      time,
      message,
      services,
    } = req.body;

    if (!fullName || !email || !phone || !budget || !date || !time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await db.collection("discussions").add({
      fullName,
      email,
      phone,
      company,
      projectType,
      budget,
      date,
      time,
      message,
      services,
      createdAt: new Date(),
    });

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
