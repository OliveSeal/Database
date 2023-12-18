import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDv1ecq8S79fPsnlwl3KRzJeW70fQ_ywtA",
    authDomain: "filmdatabase-4e124.firebaseapp.com",
    projectId: "filmdatabase-4e124",
    storageBucket: "filmdatabase-4e124.appspot.com",
    messagingSenderId: "391520864211",
    appId: "1:391520864211:web:34f034a8f1054605cb9126",
    measurementId: "G-DH6LNR0FPN"
  };

const app = initializeApp(firebaseConfig);
        const db = getFirestore();
        const moviesCollection = collection(db, 'Movies');

        function addMovie() {
            const filmNameInput = document.getElementById('filmName');
            const releasedYearInput = document.getElementById('releasedYear');
            const directorInput = document.getElementById('director');
            const imageURLInput = document.getElementById('imageURL');

            const filmName = filmNameInput ? filmNameInput.value : '';
            const releasedYear = releasedYearInput ? releasedYearInput.value : '';
            const director = directorInput ? directorInput.value : '';
            const imageURL = imageURLInput ? imageURLInput.value : '';

            // Add a new document with the movie information to the "Movies" collection
            addDoc(moviesCollection, {
                FilmName: filmName,
                ReleasedYear: releasedYear,
                Director: director,
                Genre: genre,
                ImageURL: imageURL,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }

        function displayMovies() {
            const movieContainer = document.querySelector('.movie-container');

            onSnapshot(moviesCollection, (querySnapshot) => {
                movieContainer.innerHTML = ''; // Clear existing content


                querySnapshot.forEach((doc) => {
                    const movieData = doc.data();
            
                    // Create movie card
                    const movieCard = document.createElement('div');
                    movieCard.className = 'movie-card';
            
                    // Create movie image
                    const movieImage = document.createElement('img');
                    movieImage.className = 'movie-image';
                    movieImage.src = movieData.ImageURL;
                    movieImage.alt = movieData.FilmName;
            
                    // Create movie info
                    const movieInfo = document.createElement('div');
                    movieInfo.className = 'movie-info';
                    movieInfo.innerHTML = `
                        <h2>${movieData.FilmName}</h2>
                        <p>Year: ${movieData.ReleasedYear}</p>
                        <p>Director: ${movieData.Director}</p>
                        <p>Genre: ${movieData.Genre}</p> <!-- Added Genre -->
                    `;
            
                    // Append image and info to the card
                    movieCard.appendChild(movieImage);
                    movieCard.appendChild(movieInfo);
            
                    // Append the movie card to the container
                    movieContainer.appendChild(movieCard);
                });
            });
        }

        // Call the displayMovies function to fetch and display movies when the page loads
        window.onload = function() {
            displayMovies();

            // Add an event listener for the form submission
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    addMovie();
                });
            }
        };  