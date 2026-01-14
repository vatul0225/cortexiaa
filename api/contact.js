import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      // eslint-disable-next-line no-undef
      projectId: process.env.FIREBASE_PROJECT_ID,
      // eslint-disable-next-line no-undef
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // eslint-disable-next-line no-undef
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await db.collection("contacts").add({
    ...req.body,
    createdAt: new Date(),
  });

  return res.status(200).json({ success: true });
}
