
  /* ── Carousels ── */
  const carouselState = [0, 0, 0];
  function updateCarousel(p) {
    const track = document.getElementById('ct' + p);
    const dots  = document.getElementById('cd' + p);
    const n = track.children.length;
    track.style.transform = `translateX(-${carouselState[p] * 100}%)`;
    Array.from(dots.children).forEach((dot, i) =>
      dot.classList.toggle('active', i === carouselState[p])
    );
  }
  function moveCarousel(p, dir) {
    const n = document.getElementById('ct' + p).children.length;
    carouselState[p] = (carouselState[p] + dir + n) % n;
    updateCarousel(p);
  }
  function goToSlide(p, i) {
    carouselState[p] = i;
    updateCarousel(p);
  }
  /* Auto-play */
  setInterval(() => { for(let i=0;i<3;i++) moveCarousel(i,1); }, 3800);

  /* ── Lang toggle ── */
  let lang = 'fr';
  function toggleLang() {
    lang = lang === 'fr' ? 'en' : 'fr';
    document.getElementById('langBtn').textContent = lang === 'fr' ? 'EN' : 'FR';
    document.querySelectorAll('[data-fr][data-en]').forEach(el => {
      const t = lang === 'fr' ? el.dataset.fr : el.dataset.en;
      if (t) el.innerHTML = t;
    });
  }

  /* ── Mobile menu ── */
  function toggleMenu() {
    const mm = document.getElementById('mobileMenu');
    mm.classList.toggle('hidden'); mm.classList.toggle('flex');
  }
  function closeMenu() {
    const mm = document.getElementById('mobileMenu');
    mm.classList.add('hidden'); mm.classList.remove('flex');
  }

  /* ── Active nav on scroll ── */
  window.addEventListener('scroll', () => {
    let current = '';
    ['home','about','skills','experience','projects','contact'].forEach(id => {
      const s = document.getElementById(id);
      if (s && scrollY >= s.offsetTop - 150) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + current)
    );
  });

  /* ── Scroll-appear ── */
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
    { threshold: .07 }
  );
  document.querySelectorAll('.sa').forEach(el => obs.observe(el));

  /* ── Timeline animation ── */
  const tlObs = new IntersectionObserver(entries =>
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 120);
    }),
    { threshold: .1 }
  );
  document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el));
