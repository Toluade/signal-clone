import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAzR_j90TUZFtO3ucFJqDpSOgWCYtwlc8",
  authDomain: "signal-clone-d5d4d.firebaseapp.com",
  projectId: "signal-clone-d5d4d",
  storageBucket: "signal-clone-d5d4d.appspot.com",
  messagingSenderId: "297423039829",
  appId: "1:297423039829:web:95b77019fe5bfd3d7653dc",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
