import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore added

const firebaseConfig = {
    apiKey: "AIzaSyDedor4bYIcAeBwLjZqVOTiXeKmVmWzuk0",
    authDomain: "neurovent-2f80f.firebaseapp.com",
    projectId: "neurovent-2f80f",
    storageBucket: "neurovent-2f80f.firebasestorage.app",
    messagingSenderId: "285041286898",
    appId: "1:285041286898:web:6c1670edfa032009baba6b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore instance



  