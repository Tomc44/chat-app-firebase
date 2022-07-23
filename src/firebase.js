import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAo2iofBp0nKeyGTDxHvwVSYWtjb4zGdZY",
    authDomain: "firechat-8b7b3.firebaseapp.com",
    projectId: "firechat-8b7b3",
    storageBucket: "firechat-8b7b3.appspot.com",
    messagingSenderId: "380354638389",
    appId: "1:380354638389:web:95b744f121b5fabe52377c",
    measurementId: "G-6711P9ZZ70"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }