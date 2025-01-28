import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBckPADk8QD8qr5QGGKXt7del-RVLckzq8",
  authDomain: "tienda-perezlefort.firebaseapp.com",
  projectId: "tienda-perezlefort",
  storageBucket: "tienda-perezlefort.firebasestorage.app",
  messagingSenderId: "842023475920",
  appId: "1:842023475920:web:6e56aadc0cf163eda75cd5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };