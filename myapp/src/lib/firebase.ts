import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAJbN4_OvxKVSOsYyPh14vrHu_4vy3EEhc",
    authDomain: "linkedup-faa5b.firebaseapp.com",
    projectId: "linkedup-faa5b",
    storageBucket: "linkedup-faa5b.appspot.com",
    messagingSenderId: "583858415971",
    appId: "1:583858415971:web:40664a4a6f1752f6a60b56",
    measurementId: "G-E099TEBXW0"
};

//init FireBase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

