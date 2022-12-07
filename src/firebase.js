import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQUZK5wVbgTFtTcrpp_fQur5Zwh3ikrWs",
  authDomain: "chat-57034.firebaseapp.com",
  projectId: "chat-57034",
  storageBucket: "chat-57034.appspot.com",
  messagingSenderId: "663504215770",
  appId: "1:663504215770:web:624783b767d8867a0d0fe3"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();