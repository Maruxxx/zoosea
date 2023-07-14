import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzpmpM1aQhqHdocu72L-ZKxbWU5VIsnig",
  authDomain: "zoosea-e1932.firebaseapp.com",
  projectId: "zoosea-e1932",
  storageBucket: "zoosea-e1932.appspot.com",
  messagingSenderId: "1089705311110",
  appId: "1:1089705311110:web:3494194f61a7d044d1ca07",
  measurementId: "G-KXD041TZ8G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebase_auth = getAuth(app)

// const analytics = getAnalytics(app);