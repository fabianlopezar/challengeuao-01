import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1z5vvy01_6IZCS1yzBVYP4cejL0e5LaA",
  authDomain: "vue-demo-1c3f5.firebaseapp.com",
  databaseURL: "https://vue-demo-1c3f5-default-rtdb.firebaseio.com",
  projectId: "vue-demo-1c3f5",
  storageBucket: "vue-demo-1c3f5.appspot.com",
  messagingSenderId: "318224169700",
  appId: "1:318224169700:web:51362c4bf539f5487c0af1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export { app };
