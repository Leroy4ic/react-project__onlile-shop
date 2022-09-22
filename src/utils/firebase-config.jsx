// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZb-FjIF976H7tJLPWWOqpxxr2b2SDdIY",
    authDomain: "online-store-6c305.firebaseapp.com",
    databaseURL: "https://online-store-6c305-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "online-store-6c305",
    storageBucket: "online-store-6c305.appspot.com",
    messagingSenderId: "478885683461",
    appId: "1:478885683461:web:0394be527cbf6d0edf976c",
    measurementId: "G-VTY4EYQE9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export default firebase;