import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRM6Jv4_YWFnwabO9_khAgWfxusXqrIvw",
  authDomain: "urban-kicks-store.firebaseapp.com",
  projectId: "urban-kicks-store",
  storageBucket: "urban-kicks-store.firebasestorage.app",
  messagingSenderId: "249046170727",
  appId: "1:249046170727:web:299cfae34b113a27a328c2"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
