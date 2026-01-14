import admin from "firebase-admin";

let serviceAccount;

// eslint-disable-next-line no-undef
if (process.env.VERCEL) {
  // ✅ Vercel production
  serviceAccount = {
    // eslint-disable-next-line no-undef
    projectId: process.env.FIREBASE_PROJECT_ID,
    // eslint-disable-next-line no-undef
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // eslint-disable-next-line no-undef
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
