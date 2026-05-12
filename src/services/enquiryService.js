import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/config";

export const saveEnquiry = async (payload) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured. Add Firebase environment variables before accepting enquiries.");
  }

  const docRef = await addDoc(collection(db, "enquiries"), {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    email: payload.email.trim(),
    serviceInterested: payload.serviceInterested,
    projectType: payload.projectType,
    budgetRange: payload.budgetRange,
    message: payload.message.trim(),
    source: "website",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};
