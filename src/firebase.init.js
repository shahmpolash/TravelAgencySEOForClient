// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBad4wj82IjN-uwnkLqWuuBTT0xiq7fQm8",
  authDomain: "travelagencydigitalmarke-60f63.firebaseapp.com",
  projectId: "travelagencydigitalmarke-60f63",
  storageBucket: "travelagencydigitalmarke-60f63.appspot.com",
  messagingSenderId: "345505904912",
  appId: "1:345505904912:web:7e8d842fefd78a070b4d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;