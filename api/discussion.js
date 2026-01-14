import { db } from "../firebase/firebaseAdmin.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      fullName,
      email,
      phone,
      company,
      budget,
      date,
      time,
      message,
      services,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !budget ||
      !date ||
      !time ||
      !services ||
      services.length === 0
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await db.collection("discussions").add({
      fullName,
      email,
      phone,
      company: company || "",
      budget,
      date,
      time,
      message: message || "",
      services,
      status: "pending",
      createdAt: new Date(),
    });

    return res.status(200).json({
      success: true,
      message: "Discussion scheduled successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
