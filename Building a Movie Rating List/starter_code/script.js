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
    return getImage(this.picture);
  }

  getRating() {
    return this.rating;
  }
}
const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZiNTI2ZGFlMTgzODBkZmI1MjU3ZGMxZmVjMTgzMiIsInN1YiI6IjY0ZWQ5Yzc2MWZlYWMxMDBlMTZjMTE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzkZTtSv_t3pa63lNzv29AiJfkalFOrcbkgkF1M9d5s",
  },
});
const API_BASE_URL = "https://api.themoviedb.org/3/";

const getImage = (imgPath, size = "original") => {
  const API_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  return `${API_IMAGE_BASE_URL}/${size}/${imgPath}`;
};
const fetchMovies = () => {
  const url = `${API_BASE_URL}movie/now_playing?language=en-US&page=1`;
  const options = getHttpOptions();

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((item) => {
        const movie = new Movie(
          item.title,
          item.release_date,
          getImage(item.poster_path),
          item.vote_average
        );
        createMovieCard(movie);
      });
      updateItemCount();
    })
    .catch((error) => {
      console.log("Error fetching movies:", error);
    });
};
const updateItemCount = () => {
  const itemCountParagraph = document.querySelector(".sort-bar p");
  const movieElements = document.querySelectorAll(".movie");
  const movieCount = movieElements.length;
  itemCountParagraph.textContent = `${movieCount} items`;
};
const createMovieCard = (movie) => {
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
};
fetchMovies();
