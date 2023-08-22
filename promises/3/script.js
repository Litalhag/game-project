const users = document.getElementById("users");
const message = document.getElementById("error");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error(`status code error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<h2>${user.name}</h2>
      <p><strong>Email:</strong>${user.email}</p>`;
      users.appendChild(userDiv);
    });
  })
  .catch((err) => {
    console.log(err);
    message.innerText = `An error occurred: ${err.message}. Please try again later.`;
  });
