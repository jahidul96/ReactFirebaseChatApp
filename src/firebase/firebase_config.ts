// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOA9c_LeuOeo_J2gBCNzCay9z3_-cF1tA",
    authDomain: "reactchatapp-49c47.firebaseapp.com",
    projectId: "reactchatapp-49c47",
    storageBucket: "reactchatapp-49c47.appspot.com",
    messagingSenderId: "24866123823",
    appId: "1:24866123823:web:3bfe343a9f0fa038e556da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
