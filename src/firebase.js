import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkpYKD1qb5VC_PyXBa1CHVMl_Y3UskY58",
    authDomain: "clone-e43d8.firebaseapp.com",
    projectId: "clone-e43d8",
    storageBucket: "clone-e43d8.appspot.com",
    messagingSenderId: "389703666078",
    appId: "1:389703666078:web:971281f7acfd39b3b46e8f",
    measurementId: "G-GZ0HBLNFBJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };