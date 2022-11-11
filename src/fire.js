import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADItFvSpgNiWxZhrvbeq0Kw6yS6_SG-R0",
  authDomain: "teamproject-e721c.firebaseapp.com",
  projectId: "teamproject-e721c",
  storageBucket: "teamproject-e721c.appspot.com",
  messagingSenderId: "56733059035",
  appId: "1:56733059035:web:2d1460d51c0769332b49fe",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
