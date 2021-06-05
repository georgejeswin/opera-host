import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcrsgTwYCuvHs3GthRMsVZpI7LLd-rUUc",
  authDomain: "opera-international.firebaseapp.com",
  projectId: "opera-international",
  storageBucket: "opera-international.appspot.com",
  messagingSenderId: "680112884816",
  appId: "1:680112884816:web:0049f858c52ac84dddd555",
  measurementId: "G-D0XZ46EC6K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
