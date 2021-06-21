import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQDzT6Y3R6Yek1OdZDpiKvn88vYBEfyzk",
    authDomain: "workman-faaa2.firebaseapp.com",
    projectId: "workman-faaa2",
    storageBucket: "workman-faaa2.appspot.com",
    messagingSenderId: "1013747595005",
    appId: "1:1013747595005:web:be5d0ed2364e0431b1b094",
    measurementId: "G-4LVJJVQPH0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;