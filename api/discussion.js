import { db } from "../firebase/admin.js";

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
      services,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !budget || !date || !time) {
      return res.status(400).json({ message: "Missing fields" });
    }

    await db.collection("discussions").add({
      fullName,
      email,
      phone,
      company,
      budget,
      date,
      time,
      services,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("DISCUSSION ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
