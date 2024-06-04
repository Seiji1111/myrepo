// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoXX3DwWvi9mducscHo5a54TexauHPMRU",
    authDomain: "todo-app-f2ab1.firebaseapp.com",
    projectId: "todo-app-f2ab1",
    storageBucket: "todo-app-f2ab1.appspot.com",
    messagingSenderId: "961342046359",
    appId: "1:961342046359:web:d64915c44fc52bb7f869d2",
    measurementId: "G-S6H7EWTXWG"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
