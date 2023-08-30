const OMDB_URL = 'https://www.omdbapi.com';

const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const movieContainer = document.querySelector('#movieContainer');
const API_KEY = '93836f28';
searchButton.addEventListener('click', function () {
  const searchTerm = searchInput.value;
  searchInput.value = '';
});
async function searchMovie(title) {
  try {
    let response = await fetch(`${OMDB_URL}?t=${title}&apikey=${API_KEY}`);
    const data = await response.json();
    const template = `
    <div class="movie-content">
        <img src="${data.Poster}" alt="Movie Poster" class="poster">
        <div class="movie-details">
          <h1>${data.Title}</h1>
          <p>${data.Plot}</p>
          <div class="info">
            <div class="info-label">Genre:</div>
            <div>${data.Genre}</div>
          </div>
          <div class="info">
            <div class="info-label">Year:</div>
            <div>${data.Year}</div>
          </div>
          <div class="info">
            <div class="info-label">Director:</div>
            <div>${data.Director}</div>
          </div>
          <div class="info">
            <div class="info-label">Actors:</div>
            <div>${data.Actors}</div>
          </div>
          <div class="info">
            <div class="info-label">Ratings:</div>
            <div id="movieRatings">             
            </div>
          </div>
        </div>
      </div>
        `;
    movieContainer.innerHTML = template;
    handleRatings();
  } catch (err) {
    console.log(err);
  }
}

function handleRatings(ratings, targetDiv) {
  if (!ratings) {
    console.log('No movie ratings provided');
    return;
  }
  ratings.forEach((rating) => {
    if (['Internet Movie Database', 'Rotten Tomatoes', 'Metacritic'].includes(rating.Source)) {
      const ratingDiv = document.createElement('div');
      const sourceSpan = document.createElement('span');
      const valueSpan = document.createElement('span');
      sourceSpan.style.fontWeight = 'bold';
      sourceSpan.innerHTML = `${rating.Source}`;
      valueSpan.innerText = rating.Value;
      ratingDiv.appendChild(sourceSpan);
      ratingDiv.appendChild(valueSpan);
      targetDiv.appendChild(ratingDiv);
    }
  });
}

// searchMovie('Rise of the Beasts');
