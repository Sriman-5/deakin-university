import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const markUserAsPremium = async (userId, sessionId) => {
  try {
    const userRef = doc(db, "users", userId);

    const data = {
      premium: true,              
      upgradedAt: new Date().toISOString()
    };
    if (sessionId) data.stripeSessionId = sessionId;

    await setDoc(userRef, data, { merge: true });

    console.log("✅ User marked as premium");
    return true;
  } catch (error) {
    console.error("❌ Error updating subscription:", error);
    return false;
  }
};
