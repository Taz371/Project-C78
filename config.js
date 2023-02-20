import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBK8IENtt-auYhUxMBkus5ZBxmLtKF2nQk",
  authDomain: "project78-2d9ec.firebaseapp.com",
  projectId: "project78-2d9ec",
  storageBucket: "project78-2d9ec.appspot.com",
  messagingSenderId: "732012550008",
  appId: "1:732012550008:web:91cbcc52450735d6781a8d"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


