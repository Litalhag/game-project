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

visCode.value = sms;

numList[0].focus();

function fillCode(el) {
  // make sure if entered alphanumeric character
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    let combinedCode = Array.from(numList)
      .reduce((acc, input) => {
        return acc + input.value;
      }, "")
      .toLocaleLowerCase();

    // Assign the combined value to the hidden input
    hidCode.value = combinedCode;
    const currentIndex = Array.from(numList).indexOf(el);
    if (currentIndex < numList.length - 1) {
      numList[currentIndex + 1].focus();
    }
  } else {
    el.value = "";
    alert("Please enter an alphanumeric character.");
  }
}

function checkSubmit() {
  if (visCode.value === sms) {
    form.submit();
    return true;
  } else {
    alert("The entered code does not match. Please try again.");
    return false;
  }
}

function checkValue(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    el.classList.remove("error");
  } else {
    el.classList.add("error");
  }
}
