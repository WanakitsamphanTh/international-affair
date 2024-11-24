// Example JavaScript to toggle active language
document.querySelectorAll('.header-lang a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.header-lang a').forEach((l) => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});
