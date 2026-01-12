import dbConnect from "../lib/db";
import Discussion from "../Backend/models/Discussion";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const {
      fullName,
      email,
      phone,
      company,
      projectType,
      budget,
      date,
      time,
      services,
      message,
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

    await Discussion.create({
      fullName,
      email,
      phone,
      company,
      projectType,
      budget,
      date,
      time,
      services,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Discussion scheduled successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}
