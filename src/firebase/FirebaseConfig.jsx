// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXxmggMs1s58x9duW8TN8QO3kfxK9AKlM",
  authDomain: "auth-afb73.firebaseapp.com",
  projectId: "auth-afb73",
  storageBucket: "auth-afb73.appspot.com",
  messagingSenderId: "772960479021",
  appId: "1:772960479021:web:725542a044050e998e15a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
