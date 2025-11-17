// Startup B — landing (lokálny mock)
// Interakcie: typovanie, lead-form submit (mock), smooth scroll, hamburger

document.addEventListener('DOMContentLoaded', () => {
  // Rok v patičke
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typing / typewriter in hero mock
  const phrases = [
    'Landing pre rýchly rast',
    'Jasné CTA. Viac leadov.',
    'Rýchly funnel. Merať. Optimalizovať.'
  ];
  const el = document.getElementById('typewriter');
  if (el) {
    let pi = 0, ci = 0, forward = true;
    setInterval(() => {
      const txt = phrases[pi];
      if (forward) {
        ci++;
        if (ci >= txt.length) { forward = false; setTimeout(()=>{},600); }
      } else {
        ci--;
        if (ci <= 0) { forward = true; pi = (pi+1) % phrases.length; }
      }
      el.textContent = txt.slice(0, ci);
    }, 80);
  }

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Hamburger (mobile)
  const hamburger = document.querySelector('.hamburger');
  hamburger && hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const opened = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!opened));
    if(nav) nav.style.display = opened ? 'none' : 'flex';
  });

  // Lead form mock handling
  const leadForm = document.getElementById('lead-form');
  const leadMsg = document.getElementById('lead-msg');
  leadForm && leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    leadMsg.textContent = 'Odosielam dopyt...';
    const data = new FormData(leadForm);
    // Tu môžeš prepojiť na Formspree/Netlify/Backend - teraz simulácia
    setTimeout(() => {
      leadMsg.textContent = 'Vďaka! Ozvem sa do 24 hodín.';
      leadForm.reset();
      // small CTA animation to confirm funnel step
      const cta = document.getElementById('cta-primary');
      if (cta) {
        cta.classList.add('pulse');
        setTimeout(()=> cta.classList.remove('pulse'), 1500);
      }
    }, 900);
  });

  // Kontakt form (footer)
  const contactForm = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  contactForm && contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = 'Odosielam správu...';
    setTimeout(()=> {
      formMsg.textContent = 'Správa odoslaná! Ozvem sa čoskoro.';
      contactForm.reset();
    }, 900);
  });

  // CTA lite scroll to benefits
  const ctaLite = document.getElementById('cta-lite');
  ctaLite && ctaLite.addEventListener('click', ()=> {
    const sec = document.getElementById('benefits');
    sec && sec.scrollIntoView({behavior:'smooth',block:'start'});
  });
});