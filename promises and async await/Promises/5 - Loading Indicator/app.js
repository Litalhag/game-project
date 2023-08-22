const loadingIndicator = document.querySelector('#loading-indicator');
const usersDiv = document.querySelector('#users');
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const errorMessage = document.querySelector('#error');
loadingIndicator.style.display = 'block';
fetch(usersURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error:${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    const userContainer = document.querySelector('#users');
    users.forEach((user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('item');
      userDiv.innerHTML = `
  <h1>
  ${user.name}
  </h1> <p><strong>Email:</strong>
  ${user.email}
  </p> 
  `;
      userContainer.appendChild(userDiv);
      loadingIndicator.style.display = 'none';
    });
  })
  .catch((err) => {
    errorMessage.textContent = `An error occurred:${err}`;
  });
