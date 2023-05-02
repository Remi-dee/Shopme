import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlcVRlMqOfdeeLz7SFNn13iKpUcJL-avY",
  authDomain: "shop-zone-dbd60.firebaseapp.com",
  projectId: "shop-zone-dbd60",
  storageBucket: "shop-zone-dbd60.appspot.com",
  messagingSenderId: "195613922536",
  appId: "1:195613922536:web:829b238f015d36279b655d",
  measurementId: "G-TE6TKYTXJR",
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;


