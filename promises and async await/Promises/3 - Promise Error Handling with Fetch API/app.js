const users = document.querySelector('#users');
const errorMessage = document.querySelector('#error');
const basicUrl = 'https://jsonplaceholder.typicode.com';
fetch(`${basicUrl}/users`)
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
      userDiv.classList.add('user');
      userDiv.innerHTML = `
    <h1>
    ${user.name}
    </h1> <p><strong>Email:</strong>
    ${user.email}
    </p> <div class="posts"></div>
    `;
      userContainer.appendChild(userDiv);
    });
  })
  .catch((err) => {
    errorMessage.textContent = `An error occurred:${err}`;
  });
