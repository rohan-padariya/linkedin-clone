// import * as firebase from 'firebase/app';
// import 'firebase/auth';
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpkdnkOtjxDKVQ5D_pyZ_Dqbh002eneEQ",
    authDomain: "linkedin-clone-18eb9.firebaseapp.com",
    projectId: "linkedin-clone-18eb9",
    storageBucket: "linkedin-clone-18eb9.appspot.com",
    messagingSenderId: "284089051866",
    appId: "1:284089051866:web:a9b3db1059cf186cea53e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const firebaseAppDB = firebaseApp.firestore();

// const firebaseAppAuth = firebaseApp.auth();

// firebaseAppDB.settings({
//     timestampsInSnapshots: true
// });

// const userRef = firebaseAppDB.collection("posts").add({
//     fullname: this.state.fullname,
//     email: this.state.email
// });

// console.log(userRef)

export { }


// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyCpkdnkOtjxDKVQ5D_pyZ_Dqbh002eneEQ",
//     authDomain: "linkedin-clone-18eb9.firebaseapp.com",
//     projectId: "linkedin-clone-18eb9",
//     storageBucket: "linkedin-clone-18eb9.appspot.com",
//     messagingSenderId: "284089051866",
//     appId: "1:284089051866:web:a9b3db1059cf186cea53e3"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// export { db };