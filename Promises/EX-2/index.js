const baseUrl = "https://jsonplaceholder.typicode.com";

function createDivWithClass(className, content) {
  const div = document.createElement("div");
  div.className = className;
  div.innerHTML = content;
  return div;
}

fetch(`${baseUrl}/users`)
  .then((usersResponse) => {
    if (!usersResponse.ok) {
      throw new Error("Failed to fetch users");
    }
    return usersResponse.json();
  })
  .then((usersData) => {
    const usersContainer = document.querySelector("#users");

    usersData.forEach((user) => {
      const userDiv = createDivWithClass(
        "user",
        `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>
      `
      );
      usersContainer.appendChild(userDiv);

      fetch(`${baseUrl}/posts?userId=${user.id}`)
        .then((postsResponse) => {
          if (!postsResponse.ok) {
            throw new Error("Failed to fetch posts");
          }
          return postsResponse.json();
        })
        .then((postsData) => {
          const postsContainer = userDiv.querySelector(".posts");
          postsData.forEach((post) => {
            const postDiv = createDivWithClass(
              "post",
              `
              <strong>${post.title}</strong>
              <br>${post.body}
            `
            );
            postsContainer.appendChild(postDiv);
          });
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
