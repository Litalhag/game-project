fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error(`status code error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    const usersContainer = document.getElementById("users");
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
            <h2>${user.name}</h2> 
            <p><strong>Email:</strong>${user.email}</p> 
            <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => {
          if (!response.ok)
            throw new Error(`status code error: ${response.status}`);
          return response.json();
        })
        .then((data) => {
          const postsDiv = userDiv.querySelector(".posts");
          postsDiv.innerHTML = "<h1>posts</h1>";
          data.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<strong>${post.title}</strong>
            <br>${post.body}`;
            postsDiv.appendChild(postDiv);
          });
        })
        .catch((err) => {
          console.log(`error posts ${err}`);
        });
    });
  })
  .catch((err) => {
    console.log(`error users ${err}`);
  });
