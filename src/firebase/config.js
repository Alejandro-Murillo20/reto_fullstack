// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzu11B_LsoBn8ztg0s2Hyx8TcwWRiJ9JE",
  authDomain: "alejandro-store.firebaseapp.com",
  projectId: "alejandro-store",
  storageBucket: "alejandro-store.firebasestorage.app",
  messagingSenderId: "177913577859",
  appId: "1:177913577859:web:37c6b9daedb684cecb36b6",
  measurementId: "G-5EP46NHGQD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
