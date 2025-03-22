// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfeKpJTIYmn7U4VVN9TAo0bHEtmuLVXZY",
  authDomain: "celebrate-together.firebaseapp.com",
  projectId: "celebrate-together",
  storageBucket: "celebrate-together.firebasestorage.app",
  messagingSenderId: "280762507854",
  appId: "1:280762507854:web:41bbb478b68e479409191f",
  measurementId: "G-SDH04N5F4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();