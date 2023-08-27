const usersURL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  const response = await fetch(usersURL);
  const users = await response.json();
  return users;
}

async function fetchPosts(userID) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
  const posts = await response.json();
  return posts;
}

async function displayUserAndPosts() {
  try {
    const users = await fetchUsers();
    const usersContainer = document.getElementById('users');
    users.forEach(async (user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
                <h2>${user.name}</h2> 
                <p><strong>Email:</strong>${user.email}</p> 
                <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);
      try {
        const posts = await fetchPosts(user.id);
        const postsDiv = userDiv.querySelector('.posts');
        posts.forEach((post) => {
          const postDiv = document.createElement('div');
          postDiv.classList.add('post');
          postDiv.innerHTML = `<strong>${post.title}</strong>
            <br>${post.body}`;
          postsDiv.appendChild(postDiv);
        });
      } catch (e) {
        console.log(`this is a posts error ${e}`);
      }
    });
  } catch (e) {
    console.log(`this is a users error ${e}`);
  }
}
displayUserAndPosts();
