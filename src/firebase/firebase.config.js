// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApsbcdDsN-2WycZCDX6dx27GifESQDUu0",
  authDomain: "foodshare-7273f.firebaseapp.com",
  projectId: "foodshare-7273f",
  storageBucket: "foodshare-7273f.appspot.com",
  messagingSenderId: "992587393836",
  appId: "1:992587393836:web:0ef26e795cb6f628ba1a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;