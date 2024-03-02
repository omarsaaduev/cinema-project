// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNOwJoNY_CzNmg3p0ania-GkOdo1xrPGo",
  authDomain: "movies-1190a.firebaseapp.com",
  projectId: "movies-1190a",
  storageBucket: "movies-1190a.appspot.com",
  messagingSenderId: "154195268844",
  appId: "1:154195268844:web:9f3fcd9fa222afe5f681c9",
  measurementId: "G-ZP94NX3DXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);