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
      <h2>
      ${user.name}
      </h2> <p><strong>Email:</strong>
      ${user.email}
      </p> <div class="posts"></div>
      `;
      userContainer.appendChild(userDiv);
      fetch(`${basicUrl}/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((posts) => {
          const postContainer = userDiv.querySelector('.posts');
          postContainer.innerHTML = '<h2>posts:</h2>';
          posts.forEach((post) => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<strong>${post.title}</strong>`;
            postContainer.appendChild(postDiv);
          });
        })
        .catch((err) => {
          console.log(`error posts ${err}`);
        });
    });
  })
  .catch((err) => {
    console.log(`error posts ${err}`);
  });
