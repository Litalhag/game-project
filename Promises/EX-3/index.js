const url = "https://jsonplaceholder.typicode.com/users";

function createDivWithClass(className, content) {
  const div = document.createElement("div");
  div.className = className;
  div.innerHTML = content;
  return div;
}

function fetchesUsers() {
  fetch(`${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      } else {
        return response.json();
      }
    })
    .then((usersData) => {
      const usersContainer = document.querySelector("#users");
      usersData.forEach((user) => {
        const userDiv = createDivWithClass(
          "user",
          `
        <h1>${user.name}</h1>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>
      `
        );
        usersContainer.appendChild(userDiv);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchesUsers();
