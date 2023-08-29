const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const prom1 = fetch(usersUrl).then((response) => {
  if (!response.ok) {
    throw new Error("Error fetching user data");
  }
  return response.json();
});

const prom2 = fetch(postsUrl).then((response) => {
  if (!response.ok) {
    throw new Error("Error fetching post data");
  }
  return response.json();
});

Promise.all([prom1, prom2])
  .then(([users, posts]) => {
    const usersContainer = document.getElementById("users");
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersContainer.appendChild(userDiv);
    });

    const postsContainer = document.getElementById("posts");
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch((error) => {
    const errorContainer = document.getElementById("error");
    errorContainer.textContent = "An error occurred: " + error.message;
  });
