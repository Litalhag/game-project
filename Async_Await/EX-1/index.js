const baseUsersData = "https://jsonplaceholder.typicode.com";
const usersContainer = document.getElementById("users");

async function fetchUsers() {
  try {
    const response = await fetch(`${baseUsersData}/users`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function fetchPosts(userId) {
  try {
    const response = await fetch(`${baseUsersData}/posts?userId=${userId}`);
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
  }
}

async function displayUserAndPosts() {
  try {
    const users = await fetchUsers();

    if (!users) {
      console.log("Unable to fetch users.");
      return;
    }

    for (const user of users) {
      const userContainer = document.createElement("div");
      userContainer.classList.add("user-container");

      const nameElement = document.createElement("h2");
      nameElement.textContent = user.username;

      const emailElement = document.createElement("p");
      emailElement.textContent = `Email: ${user.email}`;

      userContainer.appendChild(nameElement);
      userContainer.appendChild(emailElement);

      usersContainer.appendChild(userContainer);

      const posts = await fetchPosts(user.id);

      if (!posts) {
        console.log(`Unable to fetch posts for user ${user.username}.`);
        continue;
      }

      for (const post of posts) {
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");

        const titleElement = document.createElement("h3");
        titleElement.textContent = post.title;

        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;

        postContainer.appendChild(titleElement);
        postContainer.appendChild(bodyElement);

        userContainer.appendChild(postContainer);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

window.onload = displayUserAndPosts;
