const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const loadingIndicator = document.querySelector('#loading-indicator');
const usersContainer = document.querySelector('#users');

async function fetchUsers() {
  try {
    loadingIndicator.style.display = 'block';
    const response = await fetch(usersUrl);
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
    console.log(`this is a users error ${err}`);
  } finally {
    loadingIndicator.style.display = 'none';
  }
}
fetchUsers();
