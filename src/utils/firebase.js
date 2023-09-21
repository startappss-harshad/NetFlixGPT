// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIqLpOwbFMhw4Gk_Pp6U6v42b3KMdCBzo",
  authDomain: "netflixgpt-97b22.firebaseapp.com",
  projectId: "netflixgpt-97b22",
  storageBucket: "netflixgpt-97b22.appspot.com",
  messagingSenderId: "504214211058",
  appId: "1:504214211058:web:4859111a9742afeb16036b",
  measurementId: "G-TRKQDFMPFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()