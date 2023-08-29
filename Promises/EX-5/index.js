const usersUrl = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");
const loadingDiv = document.getElementById("loading-indicator");

loadingDiv.style.display = "block";

fetch(`${usersUrl}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching user data");
    }
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
        `;
      container.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    loadingDiv.style.display = "none";
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = "An error occurred while fetching user data.";
    container.appendChild(errorDiv);
  });
