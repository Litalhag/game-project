const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function displayData() {
  const usersContainer = document.getElementById("users");
  const postsContainer = document.getElementById("posts");
  const errorContainer = document.getElementById("error");

  try {
    const [users, posts] = await Promise.all([
      fetchData(usersURL),
      fetchData(postsURL),
    ]);
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br> ${user.email}`;
      usersContainer.appendChild(userDiv);
    });
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong><br> ${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  } catch (err) {
    errorContainer.innerText = `An error occurred ${err.message}`;
  }
}
displayData();
