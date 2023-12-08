import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/compat/functions";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJ7DTE30GKkXezO1G2y1hXVgBu97XThg",
  authDomain: "youdytest.firebaseapp.com",
  projectId: "youdytest",
  storageBucket: "youdytest.appspot.com",
  messagingSenderId: "257385598639",
  appId: "1:257385598639:web:1fe2de77f4e0f4ccca8e5a",
  measurementId: "G-KZKZ509NX2",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
