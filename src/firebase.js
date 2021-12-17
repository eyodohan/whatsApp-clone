import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJsU6PcVjDtT41Wt9_0iKnWqSIEwOngRs",
  authDomain: "whatsapp-clone-43967.firebaseapp.com",
  projectId: "whatsapp-clone-43967",
  storageBucket: "whatsapp-clone-43967.appspot.com",
  messagingSenderId: "667496652489",
  appId: "1:667496652489:web:26a0a4ab2a75a574473718",
  measurementId: "G-YH8GBDJLYL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
