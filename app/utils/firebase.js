import firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_7kHFbMxcPGxwR1418YaJCnlr5EWD6u0",
  authDomain: "tenedores-3cd98.firebaseapp.com",
  databaseURL: "https://tenedores-3cd98.firebaseio.com",
  projectId: "tenedores-3cd98",
  storageBucket: "tenedores-3cd98.appspot.com",
  messagingSenderId: "1023041302358",
  appId: "1:1023041302358:web:46b6dad158502df58930f7"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
