const OMDB_URL = 'https://www.omdbapi.com';

const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const movieContainer = document.querySelector('#movieContainer');
const API_KEY = '93836f28';
searchButton.addEventListener('click', function () {
  searchMovie();
  searchInput.value = '';
});
async function searchMovie(title) {
  try {
    let response = await fetch(`${OMDB_URL}?t=${title}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    const tamplate = ``;
    movieContainer.innerHTML = tamplate;
    handleRatings();
  } catch (err) {
    console.log(err);
  }
}

// function handleRatings(ratings, targetDiv) {
//   if (!ratings) {
//     console.log('No movie ratings provided');
//     return;
//   }
//   ratings.forEach((rating) => {
//     // Create a div to hold each rating
//     const ratingDiv = document.createElement('div');

//     // Add the source and value of the rating to the div
//     ratingDiv.innerHTML = `<span style="font-weight: bold;">${rating.Source}: </span><span>${rating.Value}</span>`;

//     // Append the div to the targetDiv
//     targetDiv.appendChild(ratingDiv);
//   });
//   ratings.forEach((rating) => {});
// }

searchMovie('Rise of the Beasts');
