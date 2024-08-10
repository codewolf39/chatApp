// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-v2-72d17.firebaseapp.com",
  projectId: "chat-app-v2-72d17",
  storageBucket: "chat-app-v2-72d17.appspot.com",
  messagingSenderId: "1060014925144",
  appId: "1:1060014925144:web:36a515c10f96e95813b12d",
  measurementId: "G-ZMBN3WB21S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
