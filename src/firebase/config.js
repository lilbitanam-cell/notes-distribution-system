
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";


// ============================================
// FIREBASE CONFIGURATION
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyCl1m5SbOm5fw3kFsOtkARaJikLK7unVuE",
  authDomain: "notes-distribution-system.firebaseapp.com",
  projectId: "notes-distribution-system",
  storageBucket: "notes-distribution-system.firebasestorage.app",
  messagingSenderId: "323383181589",
  appId: "1:323383181589:web:01974487fcc068c6e9691c",
  measurementId: "G-J2YXFCM2QH",
};


// ============================================
// INITIALIZE FIREBASE
// ============================================

const app = initializeApp(firebaseConfig);


// ============================================
// AUTHENTICATION
// ============================================

const auth = getAuth(app);


// ============================================
// GOOGLE AUTHENTICATION
// ============================================

const googleProvider = new GoogleAuthProvider();


// ============================================
// FIRESTORE DATABASE
// ============================================

const db = getFirestore(app);


// ============================================
// EXPORT
// ============================================

export {
  app,
  auth,
  db,

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

  GoogleAuthProvider,
  googleProvider,
  signInWithPopup,
  updateProfile,

  doc,
  setDoc,
  getDoc,
  serverTimestamp,
};