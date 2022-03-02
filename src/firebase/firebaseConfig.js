import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAGQgApLxFSOUbALJV-JVXzQcKSgzpYPk",
    authDomain: "pruebatecnicaag-6f2f7.firebaseapp.com",
    projectId: "pruebatecnicaag-6f2f7",
    storageBucket: "pruebatecnicaag-6f2f7.appspot.com",
    messagingSenderId: "498637757707",
    appId: "1:498637757707:web:02a7564421544463b3560e",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore();

export { app, google, facebook, dataBase };
