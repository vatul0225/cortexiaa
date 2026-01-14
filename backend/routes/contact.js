import express from "express";
import { db } from "../firebase/admin.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    console.log("📩 CONTACT BODY:", req.body);

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Validation failed");
      return res.status(400).json({ message: "Missing fields" });
    }

    await db.collection("contacts").add({
      name,
      email,
      phone: phone || "",
      message,
      createdAt: new Date(),
    });

    console.log("✅ Contact saved in Firestore");

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("🔥 CONTACT ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
