const usersContainer = document.querySelector('#users');
const errorMessage = document.querySelector('.error-message');
const usersURL = 'https://jsonplaceholder.typicode.com/users';
errorMessage.style.display = 'none';
async function fetchUsers() {
  try {
    const response = await fetch(usersURL);
    if (!response.ok) {
      throw new Error(`Status Code Error:${response.status} , Network response was not ok!`);
    }
    const users = await response.json();
    users.forEach(async (user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
                <h2>${user.name}</h2> 
                <p><strong>Email:</strong>${user.email}</p> 
                <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);
    });
  } catch (err) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = `An error occurred:${err}`;
    console.log(`this is a users error ${err}`);
  }
}
fetchUsers();
