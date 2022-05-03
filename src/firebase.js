// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtdIOLDjk_yZCKMdZCkViJ6XTiPiQRzhY",
    authDomain: "ledec-church-website.firebaseapp.com",
    projectId: "ledec-church-website",
    storageBucket: "ledec-church-website.appspot.com",
    messagingSenderId: "940536983573",
    appId: "1:940536983573:web:d29c247087d5f5095dde1c",
    measurementId: "G-4D811LY0HV"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

console.log(analytics)
console.log(firestore)

export {analytics, firestore}