const form = document.getElementById("modal-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("passwordInput").value;
  alert(
    "nickname: " + nickname + "\nEmail: " + email + "\nPassword: " + password
  );
});
