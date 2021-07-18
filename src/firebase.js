import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBRusGKQ_ilmtvnSlyb_iYpvVLCY97F0-s",
    authDomain: "magiterreact.firebaseapp.com",
    projectId: "magiterreact",
    storageBucket: "magiterreact.appspot.com",
    messagingSenderId: "1082955092437",
    appId: "1:1082955092437:web:ac809b948e174793b6ed5c"
  };
    // Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
