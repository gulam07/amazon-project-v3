import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbGsaHfBuqPUurU43He1VoZnhgo7-EaqQ",
  authDomain: "clone-b9335.firebaseapp.com",
  projectId: "clone-b9335",
  storageBucket: "clone-b9335.appspot.com",
  messagingSenderId: "217527013436",
  appId: "1:217527013436:web:d8b2b17a6bf26a3f4a7339"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};