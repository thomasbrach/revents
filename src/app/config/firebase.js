import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reventscourse-fe350.firebaseapp.com",
  databaseURL: "https://reventscourse-fe350.firebaseio.com",
  projectId: "reventscourse-fe350",
  storageBucket: "reventscourse-fe350.appspot.com",
  messagingSenderId: "442070061408",
  appId: "1:442070061408:web:95d8f22283a937af4e0e05",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
