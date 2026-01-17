// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnzznaoeERUyD94_GZFx16FOj0hyZsNrI",
    authDomain: "astro-authenticate-devtalles.firebaseapp.com",
    projectId: "astro-authenticate-devtalles",
    storageBucket: "astro-authenticate-devtalles.firebasestorage.app",
    messagingSenderId: "35070761782",
    appId: "1:35070761782:web:4b47fa9a2db1083dd03197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const firebase = {
    app,
    auth
}