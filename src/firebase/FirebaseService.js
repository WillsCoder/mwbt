import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app, auth } from "./Firebase";

 export const db = getFirestore(app);

    export const signUp = async (values) => {
            const response = await createUserWithEmailAndPassword(auth, values.email, values.password);
            await sendEmailVerification(response.user);
            return response
    }
   export const signIn = async (values) => {
          const res = await signInWithEmailAndPassword(auth, values.email, values.password);
          return res
      };
    export  const SignOut = async() => {
        try {
            await signOut(auth)
            return true
        } catch (error) {
            return false
        }
        };