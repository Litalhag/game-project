const form = document.querySelector("#form");
const numList = form.querySelectorAll("input[type=text]");
console.log(numList);
const hidCode = document.querySelector("#hid-code");
const visCode = document.querySelector("#vis-code");
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sms = randomCode(chars);

function randomCode(chars) {
  let result = "";
  for (var i = 0; i < 6; i++)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
visCode.value = sms;
numList[0].focus();

function fillCode() {
  if (/^[a-zA-Z0-9]$/.test(this.value)) {
    hidCode.value = Array.from(numList).reduce(
      (acc, char) => acc + char.value,
      ""
    );
    // .toLowerCase();
    if (this.nextElementSibling) this.nextElementSibling.focus();
  } else this.value = "";
}
function fillFromClipboard(event) {
  console.log(event);
  event.preventDefault();
  const paste = (event.clipboardData || window.clipboardData).getData("text");
  if (paste.length !== 6 || /^[a-zA-Z0-9]$/.test(paste)) return false;
  else {
    for (i = 0; i < 6; i++) {
      numList[i].value = paste[i];
    }
  }
}

function checkAndSubmit() {
  if (visCode.value === hidCode.value) {
    form.submit();
  } else return false;
}
function checkValue() {
  if (/^[a-zA-Z0-9]$/.test(this.value)) this.classList.remove("error");
  else this.classList.add("error");
}

numList.forEach((el) => {
  el.addEventListener("keyup", fillCode);
  el.addEventListener("keyup", checkValue);
  el.addEventListener("paste", fillFromClipboard);
  el.addEventListener("keyup", checkAndSubmit);
});
