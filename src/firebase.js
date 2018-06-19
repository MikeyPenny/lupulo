import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyDFWakwMXPVFEqv2ozw8nnh6pVIVA_POss",
    authDomain: "lup-cefalo.firebaseapp.com",
    databaseURL: "https://lup-cefalo.firebaseio.com",
    projectId: "lup-cefalo",
    storageBucket: "",
    messagingSenderId: "528366598966"
})

export const db = app.database();
export const msgRef = db.ref('message');