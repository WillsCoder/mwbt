// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import "firebase/firebase-auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ87J_GkwrqHCE1iKu2WLBU0GSC9P40d0",
  authDomain: "first-auth-c87c2.firebaseapp.com",
  projectId: "first-auth-c87c2",
  storageBucket: "first-auth-c87c2.appspot.com",
  messagingSenderId: "801066523744",
  appId: "1:801066523744:web:8994e7721027fb2c5bf705",
  measurementId: "G-V8YV4MJ5RV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const auth = firebase.auth();

export {auth};