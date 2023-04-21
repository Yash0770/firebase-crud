// import firebase from 'firebase/app';  
// import 'firebase/database';

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTGDx73NVy2s7s5hL4ATMIE-u86hRPpjk",
  authDomain: "contact-89cd1.firebaseapp.com",
  projectId: "contact-89cd1",
  storageBucket: "contact-89cd1.appspot.com",
  messagingSenderId: "480827368986",
  appId: "1:480827368986:web:d8a44e451985ba2fca13a3"
};

// const fireDb = firebase.initializeApp(firebaseConfig);
// export default fireDb.database().ref();

firebase.initializeApp(firebaseConfig);

// const fireDb = firebase.database().ref();
const fireDb = firebase.database()

export default fireDb;