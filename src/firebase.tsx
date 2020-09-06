import {initializeApp, analytics, firestore} from 'firebase'

const config = {
    apiKey: "AIzaSyA-MjjysDLhRMBQjwfHLIUPrQnaXmQxer4",
    authDomain: "safeat-9d9d5.firebaseapp.com",
    databaseURL: "https://safeat-9d9d5.firebaseio.com",
    projectId: "safeat-9d9d5",
    storageBucket: "safeat-9d9d5.appspot.com",
    messagingSenderId: "18410062042",
    appId: "1:18410062042:web:8218a308f2b17c4d1165e3",
    measurementId: "G-TTHMD6P0TV"
};
// Initialize Firebase
initializeApp(config);
analytics();

export const db = firestore()