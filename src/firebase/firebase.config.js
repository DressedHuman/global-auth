// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8l5Z5QrQjas2s2QJvkGRamkwsOZz7-o",
  authDomain: "global-auth-9976d.firebaseapp.com",
  projectId: "global-auth-9976d",
  storageBucket: "global-auth-9976d.appspot.com",
  messagingSenderId: "18744695399",
  appId: "1:18744695399:web:86ce7e5b0ea59092f112c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;