import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9LFF127z82prL2KuYeu0wT4Ktihffw1w",
    authDomain: "employee-react-redux-app.firebaseapp.com",
    projectId: "employee-react-redux-app",
    storageBucket: "employee-react-redux-app.appspot.com",
    messagingSenderId: "201468556273",
    appId: "1:201468556273:web:f34a68ba21f0b2e3990a50"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();