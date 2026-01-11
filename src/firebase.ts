// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRGu0lsg5aAJuwGbjRwqY84UZ7UGGYAA",
  authDomain: "meras-cafe.firebaseapp.com",
  databaseURL: "https://meras-cafe-default-rtdb.firebaseio.com",
  projectId: "meras-cafe",
  storageBucket: "meras-cafe.firebasestorage.app",
  messagingSenderId: "166947976546",
  appId: "1:166947976546:web:bb496fb534151b8f0d283b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 هذا هو المهم
export const db = getDatabase(app);
export const auth = getAuth(app);
