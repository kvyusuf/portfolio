document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('overlay');

  const openMenu = () => {
    navLinks.classList.add('show');
    overlay.classList.add('show');
    hamburger.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('show');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') closeMenu();
  });
}); // <--- ini WAJIB ada, jangan ketiban kode lain


// --- Animasi muncul pas scroll ---
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fadeEl => {
  observer.observe(fadeEl);
});


// --- Animasi progress bar skill ---
const skillBars = document.querySelectorAll('.fill');

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = bar.getAttribute('data-skill');
      bar.style.width = target + "%"; // animasi ke target persen
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fader.classList.add("visible");
      }
    });
  }

  // langsung cek pas pertama kali load
  checkVisibility();

  // cek lagi tiap kali scroll
  window.addEventListener("scroll", checkVisibility);
});
