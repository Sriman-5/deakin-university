import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvkmAk9HnHbgA90eh5PUuZVzhfpl5a0Aw",
  authDomain: "login-page-756e3.firebaseapp.com",
  projectId: "login-page-756e3",
  storageBucket: "login-page-756e3.firebasestorage.app",
  messagingSenderId: "760502728479",
  appId: "1:760502728479:web:1e8ae0b59ec9734a99e22a",
  measurementId: "G-55VH1PKVNF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
