import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAhQ2p6jpK-1DJrwea5Rwt1eiEXIL7PTAU",
    authDomain: "miniapp-74319.firebaseapp.com",
    projectId: "miniapp-74319",
    storageBucket: "miniapp-74319.appspot.com",
    messagingSenderId: "576482851893",
    appId: "1:576482851893:web:b3764dbc0f43781776457c"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
