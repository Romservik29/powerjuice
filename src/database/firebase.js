import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBP0mXAjwfnI_MIVnZI7tLjHPlK27mYG3A",
    authDomain: "powerjuice-f025a.firebaseapp.com",
    projectId: "powerjuice-f025a",
    storageBucket: "powerjuice-f025a.appspot.com",
    messagingSenderId: "319333397651",
    appId: "1:319333397651:web:d11e3ba7d7bab477dd0966",
    measurementId: "G-Y0QZK7VS1Q"
  };

const  app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };