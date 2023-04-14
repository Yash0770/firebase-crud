import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyABxHkvigOefGhKiHXhEdQ3AsPPtdicpDA",
  authDomain: "react-contact-5a339.firebaseapp.com",
  projectId: "react-contact-5a339",
  storageBucket: "react-contact-5a339.appspot.com",
  messagingSenderId: "127019994323",
  appId: "1:127019994323:web:e29d93acb0e1758b961826"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();