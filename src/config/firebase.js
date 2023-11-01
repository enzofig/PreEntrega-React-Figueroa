
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "proyectofinal-1e3db.firebaseapp.com",
  projectId: "proyectofinal-1e3db",
  storageBucket: "proyectofinal-1e3db.appspot.com",
  messagingSenderId: "348728621335",
  appId: process.env.OTRA_VARIABLE_FIREBASE,
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);