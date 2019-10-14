import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAASrZ4XTIRbiVh78wMAA4KnpYkjb2rMYE",
  authDomain: "cloth-store-db.firebaseapp.com",
  databaseURL: "https://cloth-store-db.firebaseio.com",
  projectId: "cloth-store-db",
  storageBucket: "cloth-store-db.appspot.com",
  messagingSenderId: "513579802854",
  appId: "1:513579802854:web:102a9d82435cd220881b27"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;