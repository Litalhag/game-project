const GITHUB_API_URL = 'https://api.github.com/users/';
const userDetailContainer = document.querySelector('#user-details');
const searchField = document.getElementById('searchField');
const searchButton = document.querySelector('#searchButton');

async function fetchUser(username) {
  let response = await fetch(GITHUB_API_URL + username);
  console.log(response);
  const user = await response.json();
  console.log(user);
  displayUser(user);
}
function displayUser(user) {
  const userHTML = `
  <div class="card grid-2">
  <div class="all-center">
    <img src="${user.avatar_url}" class="round-img" alt="avatar" />
    <h2>${user.name}</h2>
    ${user.location ? `<p>${user.location}</p>` : ''}
  </div>
  <div class="all-center">
    ${
      user.bio
        ? `<h3 class="text-center">Bio</h3>
    <p>
    ${user.bio}
    </p>`
        : ''
    }
    <ul>
      <li><strong>Username:</strong>${user.login}</li>
      <li></li>
      <li>
        <strong>Site: </strong
        ><a href="${user.blog}" target="_blank" rel="noreferrer">${user.blog}</a>
      </li>
      <li></li>
    </ul>
    <a href="${user.html_url}" class="btn btn-success my-1" target="_blank" rel="noreferrer"
      >To Github Profile
      </a
    >
  </div>
</div>
<div class="card text-center">
  <div class="badge badge-dark">Followers: ${user.followers}</div>
  <div class="badge badge-success">Following:${user.following}</div>
  <div class="badge badge-info">Public Repositories:${user.public_repos}
  </div>
  <div class="badge badge-light">Public Gists:${user.public_gists}</div>
</div>
  `;
  userDetailContainer.innerHTML = userHTML;
}

searchButton.addEventListener('click', () => {
  fetchUser(searchField.value);
});
