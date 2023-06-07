// JavaScript menu hamburguer
//const do menu toggle 
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll('.menu a');
//evento aplicado na pratica
menuToggle.addEventListener('click', function() {
  nav.classList.toggle('menu-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    nav.classList.remove('menu-open');
  });
});
//ao clicar na "Window"/"janela" fechar, literalmente.
window.addEventListener('click', function(event) {
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove('menu-open');
  }
});