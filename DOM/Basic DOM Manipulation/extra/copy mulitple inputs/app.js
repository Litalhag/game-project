//Initial variables

const form = document.querySelector('#form');
const numList = document.querySelectorAll('#form input');
const hidCode = document.querySelector('#hid-code');
const visCode = document.querySelector('#vis-code');
const randomAlphaNumeric = (length) => {
  let alphaNumericStr = '';
  Array.from({ length }).some(() => {
    alphaNumericStr += Math.random().toString(36).slice(2);
    return alphaNumericStr.length >= length;
  });
  return alphaNumericStr.slice(0, length).toLocaleUpperCase();
};
const sms = randomAlphaNumeric(6);

//Initial setup
visCode.value = sms;

numList[1].focus();

//fill code
function fillCode(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    let inputStr = Array.from(numList)
      .reduce((acc, char) => acc + char, '')
      .toLowerCase();
    hidCode.value = inputStr;
  } else el = '';
}
