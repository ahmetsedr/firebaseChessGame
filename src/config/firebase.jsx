import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjp5j1XPV4EzWcD239A3mHuG-DfeAvTGU",
    authDomain: "chessapp-2fbce.firebaseapp.com",
    projectId: "chessapp-2fbce",
    storageBucket: "chessapp-2fbce.appspot.com",
    messagingSenderId: "672059408506",
    appId: "1:672059408506:web:f43b0695c49c497dd33bc3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);