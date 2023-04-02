import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDKlmg0eERf3qF21IadFNGnytXhndCdPn4",
  authDomain: "normal-b5f3b.firebaseapp.com",
  projectId: "normal-b5f3b",
  storageBucket: "normal-b5f3b.appspot.com",
  messagingSenderId: "227651646460",
  appId: "1:227651646460:web:8c6a9d1e98364e1370f879",
  measurementId: "G-H9MYKM9E1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
