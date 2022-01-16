import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA7G4kkxVuf82kJq2-X6ennPhrpSH-xoJM',
  authDomain: 'simple-login-16902.firebaseapp.com',
  projectId: 'simple-login-16902',
  storageBucket: 'simple-login-16902.appspot.com',
  messagingSenderId: '68015540265',
  appId: '1:68015540265:web:28084f708a37fc47153438',
  measurementId: 'G-1NPVWKR9HH'
})

const firestore = app.firestore()
const auth = app.auth()

export { firebase, app, firestore, auth }
