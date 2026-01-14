import admin from "firebase-admin";

let serviceAccount;

if (process.env.VERCEL) {
  // ✅ Vercel production
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  };
} else {
  // ✅ Local development
  const local = await import("./serviceAccount.js");
  serviceAccount = local.serviceAccount;
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
