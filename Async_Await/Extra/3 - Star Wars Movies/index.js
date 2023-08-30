const SWAPI_URL = "https://swapi.dev/api/films";
const OMDB_URL =
  "http://www.omdbapi.com/?apikey={a7fb526dae18380dfb5257dc1fec1832}=";

const movieContainer = document.getElementById("movieContainer");
const movieSpinner = document.getElementById("movie-spinner");
const charactersCardContainer = document.querySelector(
  ".characters-card-container"
);
const charactersSpinner = document.getElementById("characters-spinner");

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
