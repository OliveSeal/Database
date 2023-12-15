// Importerer intitalizApp fra Firebase-app SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// Importerer alle Firestore-funksjonene vi skal bruke 
// Om du får feilmeldinga "ReferenceError: [...] is not defined", kan det være det fordi du har brukt en Firestore-funksjon uten å ha importert den her.
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDv1ecq8S79fPsnlwl3KRzJeW70fQ_ywtA",
  authDomain: "filmdatabase-4e124.firebaseapp.com",
  projectId: "filmdatabase-4e124",
  storageBucket: "filmdatabase-4e124.appspot.com",
  messagingSenderId: "391520864211",
  appId: "1:391520864211:web:34f034a8f1054605cb9126",
  measurementId: "G-DH6LNR0FPN"
};

// Starter opp Firebase med den angitte konfigurasjonen
const app = initializeApp(firebaseConfig);
// Henter ut referanse til Firestore-databasen
const db = getFirestore();

import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// Lager et nytt dokument i samlinga "elever"
await setDoc(
    doc(db, "Film", "Blyat"), {
      FilmNamn: "Blyat",
      Utgitt: "2001",
      Direktør: "Cyka Blyat"    
  });
 