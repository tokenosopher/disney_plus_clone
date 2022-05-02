// import firebase from "firebase/compat/app"
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAW-R0_5agrNfIPemVhfJ_rIFLFF7sVN_w",
    authDomain: "disney-clone-database.firebaseapp.com",
    projectId: "disney-clone-database",
    storageBucket: "disney-clone-database.appspot.com",
    messagingSenderId: "695239967511",
    appId: "1:695239967511:web:55f515cbc187536bc3ad52"
};

//initialize firebase:
initializeApp(firebaseConfig)


// init firestore service
const db = getFirestore()

//export db:
export default db

// generate & export auth object
export const auth = getAuth()

export const provider = new GoogleAuthProvider();