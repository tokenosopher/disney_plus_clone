// import firebase from "firebase/compat/app"
import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAW-R0_5agrNfIPemVhfJ_rIFLFF7sVN_w",
    authDomain: "disney-clone-database.firebaseapp.com",
    projectId: "disney-clone-database",
    storageBucket: "disney-clone-database.appspot.com",
    messagingSenderId: "695239967511",
    appId: "1:695239967511:web:55f515cbc187536bc3ad52"
};

const firebaseApp = initializeApp(firebaseConfig);
export default getFirestore();


// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };