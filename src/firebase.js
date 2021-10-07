import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCPQMZYsEVhBy4LNJTu3TaXm7ZfHZT9nv0",
    authDomain: "slack-clone-c04b2.firebaseapp.com",
    projectId: "slack-clone-c04b2",
    storageBucket: "slack-clone-c04b2.appspot.com",
    messagingSenderId: "829457602024",
    appId: "1:829457602024:web:999c407b1ea8444c7f805d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }