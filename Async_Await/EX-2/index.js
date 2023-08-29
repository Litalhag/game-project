// Function to fetch users and display them
async function fetchUsers() {
  const usersContainer = document.getElementById("users");
  const errorContainer = document.getElementById("error");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
        `;
      usersContainer.appendChild(userDiv);
    });
  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent =
      "An error occurred while fetching users: " + error.message;
    errorContainer.appendChild(errorDiv);
  }
}

fetchUsers();
