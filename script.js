/* =============================================
   AHMAD AYAZ — PORTFOLIO JS
   Particles · Typewriter · Scroll Effects · Nav · Form
   ============================================= */

/* ── PARTICLE BACKGROUND ── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], animId;

  const COUNT = 70;
  const COLORS = ['rgba(108,99,255,', 'rgba(0,212,170,', 'rgba(168,159,255,'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(1, 2.5),
      dx: randomBetween(-0.25, 0.25),
      dy: randomBetween(-0.25, 0.25),
      alpha: randomBetween(0.2, 0.65),
      color
    };
  }

  function init() {
    particles = [];
    for (let i = 0; i < COUNT; i++) particles.push(createParticle());
  }

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108,99,255,${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  window.addEventListener('resize', () => { resize(); });
})();

/* ── TYPEWRITER EFFECT ── */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Full-Stack Applications',
    'RESTful APIs',
    'React Interfaces',
    'Scalable Backends',
    'Production-Ready Code',
  ];

  let phraseIdx = 0, charIdx = 0, deleting = false, pauseTimer = null;

  const TYPING_SPEED  = 80;
  const DELETE_SPEED  = 45;
  const PAUSE_AFTER   = 1800;
  const PAUSE_BEFORE  = 350;

  function type() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        pauseTimer = setTimeout(type, PAUSE_AFTER);
        return;
      }
      setTimeout(type, TYPING_SPEED);
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, PAUSE_BEFORE);
        return;
      }
      setTimeout(type, DELETE_SPEED);
    }
  }

  setTimeout(type, 800);
})();

/* ── STICKY NAVBAR ── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = navbar ? navbar.querySelectorAll('.nav-links a[href^="#"]') : [];

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) current = section.getAttribute('id');
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── HAMBURGER MOBILE MENU ── */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.querySelector('.nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── SCROLL REVEAL ── */
(function initScrollReveal() {
  // Add data-reveal to major content blocks
  const targets = document.querySelectorAll(
    '.about-grid, .about-stats, .skill-category, ' +
    '.timeline-card, .project-card, .cert-card, ' +
    '.contact-item, .contact-form, .section-header'
  );

  targets.forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
})();

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      const top  = target.getBoundingClientRect().top + window.pageYOffset - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── CONTACT FORM ── */
(function initForm() {

  const EMAILJS_PUBLIC_KEY  = '9X8v86YB__7Gc2nyw';
  const EMAILJS_SERVICE_ID  = 'service_tb40l7j ';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  const form    = document.getElementById('contact-form');
  const msgBox  = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showMessage('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate send (replace with your backend / EmailJS / Formspree endpoint)
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending…</span>';

    try {
      // Simulate async network request
      await new Promise(resolve => setTimeout(resolve, 1400));

      showMessage(`Thanks ${name}! Your message has been sent. I'll get back to you soon.`, 'success');
      form.reset();
    } catch (err) {
      showMessage('Something went wrong. Please email me directly at ahmadayaz2022@gmail.com', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
        </svg>
      `;
    }
  });

  function showMessage(text, type) {
    msgBox.textContent  = text;
    msgBox.className    = 'form-message ' + type;
    msgBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { msgBox.className = 'form-message'; }, 6000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();

/* ── CURSOR GLOW ON MOUSE MOVE (subtle) ── */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 280px; height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
})();

/* ── RESUME DOWNLOAD ── */
(function initResumeDownload() {
  // All download trigger elements
  const triggers = [
    document.getElementById('download-resume-btn'),
    document.getElementById('nav-resume-btn'),
    document.getElementById('resume-fab'),
  ].filter(Boolean);

  const toast = document.getElementById('download-toast');
  const fab   = document.getElementById('resume-fab');

  // Show FAB after scrolling past hero
  const hero = document.getElementById('hero');
  if (fab && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        fab.classList.toggle('visible', !entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    heroObserver.observe(hero);
  }

  function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function downloadResume() {
    /*
      HOW TO USE YOUR ACTUAL PDF:
      1. Place your resume PDF (e.g. "AhmadAyaz_Resume.pdf") in the same
         folder as index.html, style.css, and script.js.
      2. Change the `resumePath` variable below to match the filename.
      3. That's it — the button will download it with the correct name.
    */
    const resumePath     = 'AhmadAyaz_Resume.pdf';  // ← your PDF filename here
    const downloadName   = 'AhmadAyaz_Resume.pdf';

    const link = document.createElement('a');
    link.href     = resumePath;
    link.download = downloadName;
    link.rel      = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast();
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', downloadResume);
  });
})();

/* ── PROJECT CARD TILT ── */
(function initCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const rotX   = (-dy * 5).toFixed(2);
      const rotY   = ( dx * 5).toFixed(2);
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
