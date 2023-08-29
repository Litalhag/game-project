class movie {
  constructor(title, releaseDate, picture, raiting) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.raiting = raiting;
  }
  gitTitle() {
    return this.title;
  }
  getReleaseDate() {
    return this.releaseDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.raiting;
  }
}
const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer your-bearer-token-here",
  },
});
const API_BASE_URL = "https://api.themoviedb.org/3/";

const getImage = (imagePath, size = "original") => {
  const imageUrl = `${API_BASE_URL}t/p/${size}/${imgPath}`;
  return imageUrl;
};
function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions());
}
