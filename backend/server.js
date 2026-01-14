import express from "express";
import cors from "cors";
import "./firebase/admin.js";

import contactRoutes from "./routes/contact.js";
import discussionRoutes from "./routes/discussion.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", discussionRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("🚀 Backend running at http://localhost:5000");
});
