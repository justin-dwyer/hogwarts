import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDphbuHRDFeYiUoUQ8F6QSCjevRpqS5CcQ",
  authDomain: "hogwarts-colfax.firebaseapp.com",
  databaseURL: "https://hogwarts-colfax.firebaseio.com",
  projectId: "hogwarts-colfax",
  storageBucket: "hogwarts-colfax.appspot.com",
  messagingSenderId: "595184764307",
  appId: "1:595184764307:web:266a991af802d90cd11466",
  measurementId: "G-4DMQNY0YEW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
