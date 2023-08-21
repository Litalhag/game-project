const allText = document.querySelectorAll('.text');
console.log(allText);

window.document.addEventListener('scroll', function () {
  allText.forEach((text) => {
    const rect = text.getBoundingClientRect().top;
    if (rect >= 0 && rect <= window.innerHeight) {
      text.classList.add('active');
    } else {
      text.classList.remove('active');
    }
  });
});
