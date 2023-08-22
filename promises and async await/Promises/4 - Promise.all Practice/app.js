const errorMessage = document.querySelector('#error');
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const fetchUsers = fetch(usersURL).then((response) => response.json());
const fetchPosts = fetch(postsURL).then((response) => response.json());

Promise.all([fetchUsers, fetchPosts])
  .then(([users, posts]) => {
    const userContainer = document.querySelector('#users');
    users.forEach((user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('item');
      userDiv.innerHTML = `<strong>${user.name}</strong>
    <br>
    ${user.email}
  `;
      userContainer.appendChild(userDiv);
    });
    const postContainer = document.querySelector('#posts');
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('item');
      postDiv.innerHTML = `<strong>${post.title}</strong>
    <br>
    ${post.body}
  `;
      postContainer.appendChild(postDiv);
    });
  })
  .catch((err) => {
    errorMessage.textContent = `An error occurred:${err}`;
  });
