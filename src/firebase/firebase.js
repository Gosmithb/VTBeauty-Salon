// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {} from '';

const firebaseConfig = {
  apiKey: process.env.REACT_APP-FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP-FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP-FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP-FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP-FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP-FIREBASE_APPID,
  measurementId: process.env.REACT_APP-FIREBASE_MEASUREMENTID
};

// Initialize Firebase}
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveUser = () => {
  addDoc
}










