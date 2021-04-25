import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzJJ8mvmAVYyDYCb67Jn5K8o88c7Qu73A",
  authDomain: "carbon-waz.firebaseapp.com",
  projectId: "carbon-waz",
  storageBucket: "carbon-waz.appspot.com",
  messagingSenderId: "151328031924",
  appId: "1:151328031924:web:0a5ebc294f41406470c3e1",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
