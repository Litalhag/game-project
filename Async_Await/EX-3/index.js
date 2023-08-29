const usersData = "https://jsonplaceholder.typicode.com/users";
const postsData = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok for ${url}`);
  }

  const data = await response.json();
  return data;
}
async function displayData() {
  try {
    const [users, posts] = await Promise.all([
      fetchData(usersData),
      fetchData(postsData),
    ]);

    const usersContainer = document.getElementById("users");
    const postsContainer = document.getElementById("posts");
    const errorContainer = document.getElementById("error");
    errorContainer.textContent = "";

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
        `;
      usersContainer.appendChild(userDiv);
    });

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    const errorContainer = document.getElementById("error");
    errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
  }
}

displayData();
