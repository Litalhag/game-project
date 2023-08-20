const allFaq = document.getElementById("faq1");
const allFaq2 = document.getElementById("faq2");
const allFaq3 = document.getElementById("faq3");
function anotherColor() {
  const secondDiv = allFaq.children[1];
  secondDiv.classList.toggle("faq-answer");
}

allFaq.addEventListener("click", anotherColor);

function anotherColor2() {
  const secondDiv = allFaq2.children[1];
  secondDiv.classList.toggle("faq-answer");
}

allFaq2.addEventListener("click", anotherColor2);

function anotherColor3() {
  const secondDiv = allFaq3.children[1];
  secondDiv.classList.toggle("faq-answer");
}
allFaq3.addEventListener("click", anotherColor3);
