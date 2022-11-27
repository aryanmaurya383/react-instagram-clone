// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";




const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyD-zoSKRL4Z62tCDz-KvNhldnDFRldTHns",
  authDomain: "instagram-clone-react-3f2ea.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-3f2ea-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-3f2ea",
  storageBucket: "instagram-clone-react-3f2ea.appspot.com",
  messagingSenderId: "272714994613",
  appId: "1:272714994613:web:750ecd81ea91dc5a35fffc",
  measurementId: "G-4VJZHGSBDF"
});

const db=firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const storage=getStorage(firebaseApp);

export{ db, auth, storage};
