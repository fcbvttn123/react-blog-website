// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDltJ8RVZtuVilrzFp9lkcZ4MWAD5Z8Uv4",
  authDomain: "blog-website-7d043.firebaseapp.com",
  projectId: "blog-website-7d043",
  storageBucket: "blog-website-7d043.appspot.com",
  messagingSenderId: "388249530271",
  appId: "1:388249530271:web:bc33b76b141abf162d97aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




// Authentication Setup 
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export async function signInWithGoogle() {
  // A sign-in popup will appear when being called
  try {
    const res = await signInWithPopup(auth, provider);
    const username = res.user.displayName;
    const email = res.user.email;
    const avt = res.user.photoURL;
    return {
      username,
      email,
      avt
    }
  } catch (err) {
    alert(err);
  }
}




// Firestore setup 
export const db = getFirestore(app)
export const blogs = collection(db, "blogs")