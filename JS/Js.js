// Importerer intitalizApp fra Firebase-app SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// Importerer alle Firestore-funksjonene vi skal bruke 
// Om du får feilmeldinga "ReferenceError: [...] is not defined, kan det være det fordi du har brukt en Firestore-funksjon uten å ha importert den her.
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

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

// Reference to the "movies" collection in Firestore
const moviesRef = doc(db, 'Film', 'Dragon Ball Super: Broly');

// Function to fetch and display movies
function displayMovies() {
    const movieContainer = document.querySelector('.movie-container');

    onSnapshot(moviesRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
            const movieData = docSnapshot.data();

            // Create movie card
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';

            // Create movie image
            const movieImage = document.createElement('img');
            movieImage.className = 'movie-image';
            movieImage.src = movieData.Bilde;
            movieImage.alt = movieData.FilmNamn;

            // Create movie info
            const movieInfo = document.createElement('div');
            movieInfo.className = 'movie-info';
            movieInfo.innerHTML = `
                <h2>${movieData.FilmNamn}</h2>
                <p>Year: ${movieData.Utgitt}</p>
                <p>Director: ${movieData.Direktør}</p>
            `;

            // Append image and info to the card
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieInfo);

            // Append the movie card to the container
            movieContainer.appendChild(movieCard);
        }
    });
}

// Call the displayMovies function to fetch and display movies when the page loads
window.onload = displayMovies;