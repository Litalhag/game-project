const usersURL = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.getElementById("users");
const indicator = document.getElementById("loading-indicator");

async function fetchUsers() {
  try {
    indicator.style.display = "block";

    const response = await fetch(usersURL);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const users = await response.json();

    usersContainer.innerHTML = "";

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
      usersContainer.appendChild(userDiv);
    });
  } catch (error) {
    console.log("An error occurred:", error);
    usersContainer.innerHTML = "Error fetching data";
  } finally {
    indicator.style.display = "none";
  }
}

fetchUsers();
