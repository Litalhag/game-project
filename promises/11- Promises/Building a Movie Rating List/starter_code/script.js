const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzc4NDQ0MDg0MWI2MzBiMGJjYTM4MzJkYTI1ODRjZCIsInN1YiI6IjY0ZWNiMTg2NTk0Yzk0MDEzOWM5ZjUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A4-9xiemlhbp6g8bHERyxwL44FeOg6UhSoy1-22fVyQ",
  },
});
const API_BASE_URL = "https://api.themoviedb.org/3/";

class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseDate() {
    const date = new Date(this.releaseDate);
    return date.toLocaleDateString();
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}

function getImage(imgPath) {
  return `https://image.tmdb.org/t/p/original/${imgPath}`;
}

function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions())
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((item) => {
        const img = getImage(item.poster_path || item.backdrop_path);
        const movie = new Movie(
          item.title,
          item.release_date,
          img,
          item.vote_average
        );
        console.log(movie);
        createMovieCard(movie);
        updateItemCount();
      });
    })
    .catch((err) => console.error(err));
}

function updateItemCount() {
  const countP = document.querySelector(".sort-bar p");
  const movies = document.querySelectorAll(".movie");
  const count = movies.length;
  countP.innerText = `${count} items`;
}
function createMovieCard(movie) {
  const target = document.querySelector(".movies-list");
  target.innerHTML += `
  <div class="movie">
  <img class="vector-img" src="./images/Vector.svg">
  <a href="#">
  <img class="poster-img" src="./images/tabler-icon-plus.svg">
  </a>
  <img class="poster" src=${movie.getPicture()}>
  <div class="flex-container movie-info">
    <a href="#" class="title normal-link">${movie.getTitle()}</a>
    <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
    <div class="flex-container rate-trailer">
      <div class="flex-container trailer">
        <img src="./images/play.svg">
        <a href="#">Trailer</a>
      </div>
      <div class="flex-container rating">
        <img src="./images/star.svg">
        <p>${movie.getRating()}</p>
      </div>
    </div>
  </div>
</div>
`;
}
fetchMovies();
