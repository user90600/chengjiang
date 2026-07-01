import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "你的apiKey",
  authDomain: "chengjiang-fc87c.firebaseapp.com",
  projectId: "chengjiang-fc87c",
  storageBucket: "chengjiang-fc87c.firebasestorage.app",
  messagingSenderId: "987554750974",
  appId: "1:987554750974:web:57cb9700a5ac794b0c20af"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };