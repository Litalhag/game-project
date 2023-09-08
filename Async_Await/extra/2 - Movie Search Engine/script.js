const OMDB_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9ba87bfe";
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const movieContainer = document.querySelector("#movieContainer");
searchButton.addEventListener("click", searchMovie());
searchInput.value = "";
async function searchMovie(title) {
  const response = await fetch(OMDB_URL);
  if (!response.ok) throw new Error(`Network response was not ok`);
  const data = await response.json();
  console.log(data);
  const template = `<div class="movie-content">
  <img
    src="https://m.media-amazon.com/images/M/MV5BOTUyM2RhZjItNDE4Ny00ZTE1LTllNDQtZjNiYjU3OGNlODYwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg"
    alt="Movie Poster" class="poster">
  <div class="movie-details">
    <h1>Transformers: Rise of the Beasts</h1>
    <p>During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for
      Earth.</p>
    <div class="info">
      <div class="info-label">Genre:</div>
      <div>Action, Adventure, Sci-Fi</div>
    </div>
    <div class="info">
      <div class="info-label">Year:</div>
      <div>2023</div>
    </div>
    <div class="info">
      <div class="info-label">Director:</div>
      <div>Steven Caple Jr.</div>
    </div>
    <div class="info">
      <div class="info-label">Actors:</div>
      <div>Anthony Ramos, Dominique Fishback, Luna Lauren Velez</div>
    </div>
    <div class="info">
      <div class="info-label">Ratings:</div>
      <div id="movieRatings">
        <div><span style="font-weight: bold;">Internet Movie Database: </span><span>6.2/10</span></div>
        <div><span style="font-weight: bold;">Rotten Tomatoes: </span><span>52%</span></div>
        <div><span style="font-weight: bold;">Metacritic: </span><span>42/100</span></div>
      </div>
    </div>
  </div>
</div>`;
}
searchMovie("blade runner 2049");
