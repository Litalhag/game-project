let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((faqitem) => {
  faqitem.addEventListener('click', () => {
    if (faqitem.classList.contains('active')) {
      faqitem.classList.remove('active');
    } else {
      faqitem.classList.add('active');
    }
  });
});
