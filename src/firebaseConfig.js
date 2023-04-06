import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZpRn1oWK28HgsYxErmI3MnD_Qhtnc1Jk",
    authDomain: "narounft.firebaseapp.com",
    projectId: "narounft",
    storageBucket: "narounft.appspot.com",
    messagingSenderId: "85491090076",
    appId: "1:85491090076:web:b0e43338c97db1cb62e359",
    measurementId: "G-T11MS2Q2ZQ"
  };

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAZpRn1oWK28HgsYxErmI3MnD_Qhtnc1Jk",
//   authDomain: "narounft.firebaseapp.com",
//   projectId: "narounft",
//   storageBucket: "narounft.appspot.com",
//   messagingSenderId: "85491090076",
//   appId: "1:85491090076:web:b0e43338c97db1cb62e359",
//   measurementId: "G-T11MS2Q2ZQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);