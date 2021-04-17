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
    apiKey: "AIzaSyBI9pyjgiPPgUmoUPW_ELtcl7si5NxlLNo",
    authDomain: "devetronics-5bc06.firebaseapp.com",
    databaseURL: "https://devetronics-5bc06-default-rtdb.firebaseio.com/",
    projectId: "devetronics-5bc06",
    storageBucket: "devetronics-5bc06.appspot.com",
    messagingSenderId: "39841222662",
    appId: "1:39841222662:web:6d3a1685770248d87d3387",
    measurementId: "G-2GYHWZK61D"
  };

firebase.initializeApp(config);
const database = firebase.database();

export {
    database
};


// fire base.


const config = {
    apiKey: "AIzaSyBI9pyjgiPPgUmoUPW_ELtcl7si5NxlLNo",
    authDomain: "devetronics-5bc06.firebaseapp.com",
    databaseURL: "https://devetronics-5bc06-default-rtdb.firebaseio.com/",
    projectId: "devetronics-5bc06",
    storageBucket: "devetronics-5bc06.appspot.com",
    messagingSenderId: "39841222662",
    appId: "1:39841222662:web:6d3a1685770248d87d3387",
    measurementId: "G-2GYHWZK61D"
  };
  


 