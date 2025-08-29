import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUA9QNwlmP468pOP_HfeSG6VZ7BKIMO3E",
  authDomain: "task7-1p-5a213.firebaseapp.com",
  projectId: "task7-1p-5a213",
  storageBucket: "task7-1p-5a213.firebasestorage.app",
  messagingSenderId: "331294998576",
  appId: "1:331294998576:web:74e3840c53c3c642782df5",
  measurementId: "G-9TGEXFRVN6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
