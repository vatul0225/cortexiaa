import { db } from "../firebase/admin.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing fields" });
    }

    await db.collection("contacts").add({
      name,
      email,
      phone: phone || "",
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
