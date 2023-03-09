// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMLefZw8-ZIcaDVmRbIe5OJEmokbO6Ylw",
  authDomain: "akhmim-gpt.firebaseapp.com",
  projectId: "akhmim-gpt",
  storageBucket: "akhmim-gpt.appspot.com",
  messagingSenderId: "537069608363",
  appId: "1:537069608363:web:39be45c1fac26598f646ee",
  measurementId: "G-BLQD6NCKVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

