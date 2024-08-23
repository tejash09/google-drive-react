import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCg3mRAX9dqkMqDQBkkrnPYUqwJlE4hTk8",
    authDomain: "drive-clone-c5c91.firebaseapp.com",
    projectId: "drive-clone-c5c91",
    storageBucket: "drive-clone-c5c91.appspot.com",
    messagingSenderId: "844573008284",
    appId: "1:844573008284:web:f0b7e2f9e74e96052d6859"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }