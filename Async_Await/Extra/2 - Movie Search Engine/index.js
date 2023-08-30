const OMDB_URL = "https://www.omdbapi.com/?apikey=e60bf7cf&t=";

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");
const spinner = document.getElementById("spinner");

searchButton.addEventListener("click", async function () {
  const searchTerm = searchInput.value;
  if (searchTerm === "") {
    alert("Please enter a movie title.");
    return;
  }
  await searchMovie(searchTerm);

  searchInput.value = "";
});

async function searchMovie(title) {
  try {
    if (!title) {
      alert("Title is required");
      return;
    }

    spinner.style.display = "flex";
    movieContainer.style.display = "none";

    const searchURL = `${OMDB_URL}${title}`;
    const response = await fetch(searchURL);
    const movieData = await response.json();

    const template = `
    <div class="movie-content">
        <img src="${movieData.Poster}" alt="Movie Poster" class="poster">
        <div class="movie-details">
          <h1>${movieData.Title}</h1>
          <p>${movieData.Plot}</p>
          <div class="info">
            <div class="info-label">Genre:</div>
            <div>${movieData.Genre}</div>
          </div>
          <div class="info">
            <div class="info-label">Year:</div>
            <div>${movieData.Year}</div>
          </div>
          <div class="info">
            <div class="info-label">Director:</div>
            <div>${movieData.Director}</div>
          </div>
          <div class="info">
            <div class="info-label">Actors:</div>
            <div>${movieData.Actors}</div>
          </div>
          <div class="info">
            <div class="info-label">Ratings:</div>
            <div id="movieRatings">             
            </div>
          </div>
        </div>
      </div>
        `;

    spinner.style.display = "none";
    movieContainer.style.display = "block";

    movieContainer.innerHTML = template;

    const ratingsContainer = document.getElementById("movieRatings");
    handleRatings(movieData.Ratings, ratingsContainer);
  } catch (error) {
    movieContainer.innerHTML = "<p>Error fetching movie data.</p>";
    console.log("Error fetching movie data:", error);
  }
}

function handleRatings(ratings, targetDiv) {
  if (!ratings) {
    return;
  }

  ratings.forEach((rating) => {
    if (
      ["Internet Movie Database", "Rotten Tomatoes", "Metacritic"].includes(
        rating.Source
      )
    ) {
      const ratingDiv = document.createElement("div");
      const sourceSpan = document.createElement("span");
      const valueSpan = document.createElement("span");

      sourceSpan.style.fontWeight = "bold";
      sourceSpan.innerText = `${rating.Source}: `;
      valueSpan.innerText = rating.Value;

      ratingDiv.appendChild(sourceSpan);
      ratingDiv.appendChild(valueSpan);
      targetDiv.appendChild(ratingDiv);
    }
  });
}

searchMovie("Inception");
