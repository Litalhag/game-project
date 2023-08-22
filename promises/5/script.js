const usersURL = "https://jsonplaceholder.typicode.com/users";
const users = document.getElementById("users");
const indicator = document.getElementById("loading-indicator");
indicator.style.display = "block";
fetch(usersURL)
  .then((response) => {
    if (!response.ok) throw new Error(`status code error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    indicator.style.display = "none";
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<h2>${user.name}</h2>
      <p><strong>Email:</strong>${user.email}</p>`;
      users.appendChild(userDiv);
    });
  })
  .catch((err) => {
    // indicator.style.display = "none";
    indicator.innerText = `An error occurred ${err.message}`;
    console.log(err);
  });
