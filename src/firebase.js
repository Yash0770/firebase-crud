// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/app';
// import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/database'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyABxHkvigOefGhKiHXhEdQ3AsPPtdicpDA",
  authDomain: "react-contact-5a339.firebaseapp.com",
  projectId: "react-contact-5a339",
  storageBucket: "react-contact-5a339.appspot.com",
  messagingSenderId: "127019994323",
  appId: "1:127019994323:web:e29d93acb0e1758b961826"
});
export const db = firebase.firestore();
// const fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();

// const app = firebase.initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig)
// const fireDb = app.database().ref()

// const fireDb = firebase.database().ref()
// export default fireDb;

export default app;