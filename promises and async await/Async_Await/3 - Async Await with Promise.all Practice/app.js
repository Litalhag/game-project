const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const errorMessage = document.querySelector('#error');
errorMessage.style.display = 'none';
// async function fetchData() {
//   const usersResponse = await fetch(usersUrl);
//   const users = await usersResponse.json();
//   const postsResponse = await fetch(postsUrl);
//   const posts = await postsResponse.json();
//   console.log(users, posts);
// }
// fetchData();//just trying something

async function fetchData(URL) {
  const response = await fetch(URL);
  return response.json();
}

async function displayData() {
  const usersContainer = document.querySelector('#users');
  const postsContainer = document.querySelector('#posts');
  try {
    const [users, posts] = await Promise.all([fetchData(usersUrl), fetchData(postsUrl)]);
    // console.log(users, posts);
    users.forEach(async (user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('item');
      userDiv.innerHTML = `
                <h2>${user.name}</h2> 
                <p><strong>Email:</strong>${user.email}</p> 
                <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);

      posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('item');
        postDiv.innerHTML = `<strong>${post.title}</strong>
          <br>${post.body}`;
        postsContainer.appendChild(postDiv);
      });
    });
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = `An error occurred: ${error.message}. Please try again later.`;
    console.log(`this is a users error ${error}`);
  }
}
displayData();
