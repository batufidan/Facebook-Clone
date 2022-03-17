import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBPsw-ULQvU8umCgDSlckl8_7jbfjqOeAg",
    authDomain: "facebook-clone-6a70d.firebaseapp.com",
    projectId: "facebook-clone-6a70d",
    storageBucket: "facebook-clone-6a70d.appspot.com",
    messagingSenderId: "646417107883",
    appId: "1:646417107883:web:34e3357245a8deffede0ee",
    measurementId: "G-SVYYESFSKM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;