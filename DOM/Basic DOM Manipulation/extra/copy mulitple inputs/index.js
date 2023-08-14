const form = document.querySelector("#form");
const numList = document.querySelectorAll('#form input[type="text"]');
const hidCode = document.querySelector("#hid-code");
const visCode = document.querySelector("#vis-code");

function generateCode() {
  const characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}
const sms = generateCode();
console.log(sms);

// visCode.value = sms;
