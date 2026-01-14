import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccount.js";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
