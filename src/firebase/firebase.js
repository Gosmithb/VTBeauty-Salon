// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFd_nIvE4jqaOQpVuAwBV72XKm1Zy9MeA",
  authDomain: "vtbeauty-salon.firebaseapp.com",
  projectId: "vtbeauty-salon",
  storageBucket: "vtbeauty-salon.appspot.com",
  messagingSenderId: "38258368566",
  appId: "1:38258368566:web:0a780ebe36aa99dff8b897",
  measurementId: "G-R7EKYRYYE7"
};

// Initialize Firebase}
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);











