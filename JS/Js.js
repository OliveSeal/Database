// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv1ecq8S79fPsnlwl3KRzJeW70fQ_ywtA",
  authDomain: "filmdatabase-4e124.firebaseapp.com",
  projectId: "filmdatabase-4e124",
  storageBucket: "filmdatabase-4e124.appspot.com",
  messagingSenderId: "391520864211",
  appId: "1:391520864211:web:34f034a8f1054605cb9126",
  measurementId: "G-DH6LNR0FPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addMovie() {
    // Legger til info i collection som heiter "movies"
    firebase.firestore().collection("movies").doc().set({
        title: "test"
    })
}