const tags = document.querySelector("#navList");
const massage = document.querySelector("#message");
tags.addEventListener("click", function (event) {
  //   to check the next line
  if (event.target.tagName === "A") {
    event.preventDefault();
    const link = event.target.dataset.link;
    massage.innerText = link;
    massage.style.display = "block";
    setTimeout(() => {
      massage.style.display = "none";
    }, "2000");
  }
});
