import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1z5vvy01_6IZCS1yzBVYP4cejL0e5LaA",
  authDomain: "vue-demo-1c3f5.firebaseapp.com",
  databaseURL: "https://vue-demo-1c3f5-default-rtdb.firebaseio.com",
  projectId: "vue-demo-1c3f5",
  storageBucket: "vue-demo-1c3f5.appspot.com",
  messagingSenderId: "318224169700",
  appId: "1:318224169700:web:51362c4bf539f5487c0af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();
const db = getDatabase(app);

export { app, auth, db, ref, set, push, onValue };