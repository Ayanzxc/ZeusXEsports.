// src/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail} from 'firebase/auth';

// Your Firebase configuration (replace with your Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyCUm6B4pfUrsWAvH5E7pLKX-ooxBjvN8dQ",
  authDomain: "adv-auth-2cfa7.firebaseapp.com",
  projectId: "adv-auth-2cfa7",
  storageBucket: "adv-auth-2cfa7.firebasestorage.app",
  messagingSenderId: "1017944302424",
  appId: "1:1017944302424:web:90d2bce158445b87b33b2d",
  measurementId: "G-MQ14MLKSEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Firebase services you need
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };