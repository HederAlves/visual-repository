// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDw8AkUL305PmSaET9GS0xc5-UCvB4PbCI",
    authDomain: "token-647c4.firebaseapp.com",
    projectId: "token-647c4",
    storageBucket: "token-647c4.appspot.com",
    messagingSenderId: "659814413520",
    appId: "1:659814413520:web:e35d0b379d34422130dad5",
    measurementId: "G-SNQP53LE9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { app, firestore, analytics };
