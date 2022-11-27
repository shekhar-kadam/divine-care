const firebaseConfig = {
  apiKey: "AIzaSyA8VSX_1eMb-bt2yWDfOB-YYPogZj9yQ4M",
  authDomain: "divine-care.firebaseapp.com",
  projectId: "divine-care",
  storageBucket: "divine-care.appspot.com",
  messagingSenderId: "940869192364",
  appId: "1:940869192364:web:a520908f552b7a089c2d09",
};

import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
// var fireDB = firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
