// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmD6ylUMnKFhnSApaEvMEL1pxpH5WXlCY",
  authDomain: "dragon-news-auth-f2ba1.firebaseapp.com",
  projectId: "dragon-news-auth-f2ba1",
  storageBucket: "dragon-news-auth-f2ba1.appspot.com",
  messagingSenderId: "440725452363",
  appId: "1:440725452363:web:4f7ddeedccdd2bcb2d7fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;