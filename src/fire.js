import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhZhYahg2DKDJ70a3YhilT2iGv72Auypw",
  authDomain: "hacaton-team-zaa.firebaseapp.com",
  projectId: "hacaton-team-zaa",
  storageBucket: "hacaton-team-zaa.appspot.com",
  messagingSenderId: "527141707530",
  appId: "1:527141707530:web:f3f072c8359ae98b0624f3",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
