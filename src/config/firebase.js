import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCpkdnkOtjxDKVQ5D_pyZ_Dqbh002eneEQ",
    authDomain: "linkedin-clone-18eb9.firebaseapp.com",
    projectId: "linkedin-clone-18eb9",
    storageBucket: "linkedin-clone-18eb9.appspot.com",
    messagingSenderId: "284089051866",
    appId: "1:284089051866:web:a9b3db1059cf186cea53e3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth }