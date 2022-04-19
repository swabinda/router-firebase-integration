// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQww0PlLoV-XFfGIiSTpw3oPvor2dBYI",
  authDomain: "router-firebase-integrat-d1b83.firebaseapp.com",
  projectId: "router-firebase-integrat-d1b83",
  storageBucket: "router-firebase-integrat-d1b83.appspot.com",
  messagingSenderId: "443790240946",
  appId: "1:443790240946:web:33528e45909fe5c4acadab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;