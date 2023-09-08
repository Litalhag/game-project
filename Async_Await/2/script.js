const users = document.getElementById("users");
const message = document.getElementById("error");
const url = "https://jsonplaceholder.typicode.com/users";
async function fetchUsers() {
  try {
    const response = await fetch(url);
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
    message.innerText = `An error occurred: ${e.message}. Please try again later.`;
  }
}
fetchUsers();
