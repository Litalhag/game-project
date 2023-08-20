const form = document.getElementById("form");
const visCode = document.getElementById("vis-code");
const hidCode = document.getElementById("hid-code");
const numList = Array.from(
  document.querySelectorAll('input[type="text"][name^="num"]')
);

function generateRandomCode() {
  const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }
  return code;
}

const sms = generateRandomCode();
visCode.value = sms;
hidCode.value = sms.toLowerCase();

numList.forEach((input, index) => {
  input.addEventListener("keyup", function () {
    fillCode(this);
    checkValue(this);
  });

  input.addEventListener("paste", function (event) {
    event.preventDefault();
    fillFromClipboard(event);
  });
});

function fillCode(el) {
  const value = el.value.toUpperCase();
  if (/^[a-zA-Z0-9]$/.test(value)) {
    numList[index].value = value;
    hidCode.value = numList
      .map((input) => input.value)
      .join("")
      .toLowerCase();
    if (index < numList.length - 1) {
      numList[index + 1].focus();
    } else {
      checkAndSubmit();
    }
  } else {
    el.value = "";
  }
}

function fillFromClipboard(event) {
  event.preventDefault();
  const paste = event.clipboardData.getData("text/plain");
  if (paste.length === 6 && /^[a-zA-Z0-9]+$/.test(paste)) {
    for (let i = 0; i < numList.length; i++) {
      numList[i].value = paste.charAt(i);
      checkValue(numList[i]);
    }
    hidCode.value = paste.toLowerCase();
    checkAndSubmit();
  }
}

function checkAndSubmit() {
  if (visCode.value === hidCode.value) {
    form.submit();
  }
}

function checkValue(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    el.classList.remove("error");
  } else {
    el.classList.add("error");
  }
}
