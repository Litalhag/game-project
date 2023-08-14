const form = document.querySelector("#form");
const numList = document.querySelectorAll("input");
const hidCode = document.querySelector("#hid-code");
const visCode = document.querySelector("#vis-code");
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sms = randomCode(chars);

function randomCode(chars) {
  let result = "";
  for (var i = 0; i < 6; i++)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
visCode.value = sms;
numList[1].focus();

function fillCode(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    hidCode.value = Array.from(numList)
      .reduce((acc, char) => acc + char, "")
      .toLowerCase();
  } else el = "";
}
