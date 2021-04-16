/**
 * Firebase Login
 * Vuely comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {
    apiKey: "AIzaSyDC6s3dgSOmBgBzAog1aW2KaQe79kc8uK8",
    authDomain: "davetronic-vue.firebaseapp.com",
    databaseURL: "https://davetronic-vue.firebaseio.com",
    projectId: "davetronic-vue",
    storageBucket: "davetronic-vue.appspot.com",
    messagingSenderId: "31177965414",
    appId: "1:31177965414:web:2e248f56df1a735c64d2a7",
    measurementId: "G-Y35HFY11SX"
};

firebase.initializeApp(config);
const database = firebase.database();

export {
    database
};
