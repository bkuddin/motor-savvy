// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7NthVsdIriX6uJsH7tZV8v56NMPeee9U",
  authDomain: "motor-savvy.firebaseapp.com",
  projectId: "motor-savvy",
  storageBucket: "motor-savvy.appspot.com",
  messagingSenderId: "935281361263",
  appId: "1:935281361263:web:7139c517ea572bc685e89a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;