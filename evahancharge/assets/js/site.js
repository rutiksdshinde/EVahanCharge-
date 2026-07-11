// EVahan — shared site behaviours (nav, reveal-on-scroll, counters, loader)
(function () {
  // Page loader
  window.addEventListener('load', () => {
    const l = document.querySelector('.pageload');
    if (l) setTimeout(() => l.classList.add('hide'), 250);
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = navLinks.classList.contains('show') ? 'fas fa-xmark' : 'fas fa-bars';
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('show');
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }));
  }

  // Navbar scroll shadow
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Animated stat counters ([data-count])
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        el.textContent = val.toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString('en-IN') + suffix;
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(el => io2.observe(el));
    } else {
      counters.forEach(animateCount);
    }
  }

  // Footer year
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());
})();
