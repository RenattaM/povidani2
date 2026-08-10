// Plynulé zjevování sekcí při scrollu
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Hamburger menu (mobil)
const hamburger = document.getElementById('hamburger');
const primaryNav = document.querySelector('#primary-nav ul');

if (hamburger && primaryNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? 'Zavřít menu' : 'Otevřít menu');
  });

  // Zavřít menu po kliknutí na odkaz
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Otevřít menu');
    });
  });
}

// Aktuální rok v patičce (aktualizuje se automaticky)
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
