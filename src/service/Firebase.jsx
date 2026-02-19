// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEWQNRAFqTXK2C9JurLTlRYNsTgdxt3Ls",
  authDomain: "coder-flex-88100-7642d.firebaseapp.com",
  projectId: "coder-flex-88100-7642d",
  storageBucket: "coder-flex-88100-7642d.firebasestorage.app",
  messagingSenderId: "566278447644",
  appId: "1:566278447644:web:28342d44e2ab01597ef5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)