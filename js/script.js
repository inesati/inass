window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
  // Simple smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add hover effect to portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
    });
  });

  var backToTopButton = document.createElement('a');
  backToTopButton.href = "#hero";
  backToTopButton.id = "back-to-top";
  backToTopButton.title = "Go to top";
  backToTopButton.innerHTML = "&#8593;"; // Up arrow character
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Show after scrolling down 300px
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#hero').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
getComputedStyle(document.querySelector("header")).position;

let lastScrollTop = 0;  // Variable para almacenar la última posición del scroll

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Si el usuario hace scroll hacia abajo, ocultamos el header
    header.classList.add('hidden');
  } else {
    // Si el usuario hace scroll hacia arriba, mostramos el header
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar números negativos en scroll
});

