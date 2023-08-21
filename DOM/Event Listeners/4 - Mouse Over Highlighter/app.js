const allParagraphs = document.querySelectorAll('.highlightable');

console.log(allParagraphs);

allParagraphs.forEach((para) => {
  para.addEventListener('mouseover', function () {
    para.classList.add('highlighted');
  });
  para.addEventListener('mouseout', function () {
    para.classList.remove('highlighted');
  });
});
