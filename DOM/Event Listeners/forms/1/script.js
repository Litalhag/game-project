// question 1
// const form = document.getElementById("modal-form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const nickname = document.getElementById("nickname").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("passwordInput").value;
//   alert(
//     "nickname: " + nickname + "\nEmail: " + email + "\nPassword: " + password
//   );
// });
// question 2
const form = document.getElementById("modal-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nickname = document.getElementById("nickname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  validForm(nickname, email, password);
});

function showError(input, massage) {
  console.log(input.id);
  const errorDiv = document.getElementById(input.id + "Error");
  errorDiv.innerText = massage;
  input.classList.add("error");
}

function validForm(nickname, email, password) {
  let isValid = true;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  if (nickname.value.length < 3) {
    showError(nickname, "nickname must be at least 3 characters long.");
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    showError(email, "Please enter a valid email.");
    isValid = false;
  }
  if (!passwordRegex.test(password.value)) {
    showError(
      password,
      "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character."
    );
    isValid = false;
  }
  if (isValid) alert("all good");
}
const inputs = document.querySelectorAll(".modal-form input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    input.classList.remove("error");
    const massage = document.getElementById(input.id + "Error");
    massage.innerText = "";
  });
});
