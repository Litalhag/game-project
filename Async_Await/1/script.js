const url = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.getElementById("users");

async function fetchUsers() {
  const response = await fetch(url);
  return response.json();
}

async function fetchPosts(userID) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
  );
  return response.json();
}

async function displayUserAndPosts() {
  try {
    const users = await fetchUsers();
    console.log(users);
    users.forEach(async (user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
                <h2>${user.name}</h2> 
                <p><strong>Email:</strong>${user.email}</p> 
                <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);
      try {
        const posts = await fetchPosts(user.id);
        console.log(posts);
        const postsDiv = userDiv.querySelector(".posts");
        posts.forEach((post) => {
          const postDiv = document.createElement("div");
          postDiv.classList.add("post");
          postDiv.innerHTML = `<strong>${post.title}</strong>
            <br>${post.body}`;
          postsDiv.appendChild(postDiv);
        });
      } catch (e) {
        console.log(`posts error ${e}`);
      }
    });
  } catch (e) {
    console.log(`users error ${e}`);
  }
}
displayUserAndPosts();
