const usersURL = "https://jsonplaceholder.typicode.com/users";
const users = document.getElementById("users");
const indicator = document.getElementById("loading-indicator");
const container = document.querySelector(".container");
async function fetchUsers() {
  indicator.style.display = "block";
  try {
    const response = await fetch(usersURL);
    if (!response.ok) throw new Error(`Network response was not ok`);
    const usersData = await response.json();
    usersData.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<h2>${user.name}</h2>
        <p><strong>Email:</strong>${user.email}</p>`;
      users.appendChild(userDiv);
    });
  } catch (e) {
    const message = document.createElement("div");
    container.appendChild(message);
    message.innerText = `An error occurred: ${e.message}. Please try again later.`;
  } finally {
    indicator.style.display = "none";
  }
}
fetchUsers();
