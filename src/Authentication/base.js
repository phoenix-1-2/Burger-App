import * as firebase from 'firebase'
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjsAA5ri2P2wkVkW-73b-EYfudlvkSII8",
    authDomain: "app-burger-124.firebaseapp.com",
    databaseURL: "https://app-burger-124-default-rtdb.firebaseio.com",
    projectId: "app-burger-124",
    storageBucket: "app-burger-124.appspot.com",
    messagingSenderId: "863065866334",
    appId: "1:863065866334:web:fea2495b68ae6476fcb4cf",
    measurementId: "G-3ZNC4RFH6D"
  };

const firebaseApp = firebase.default.initializeApp(firebaseConfig);
export default firebaseApp;