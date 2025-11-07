// index.js - reveal, smooth scroll, form, call
window.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.12});
  document.querySelectorAll('.card, .reveal').forEach(el=>obs.observe(el));

  // form
  const form = document.getElementById('signup');
  if (form) form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Sending...';
    setTimeout(()=>{ btn.disabled=false; btn.textContent='Request Free Trial'; alert('Thanks — we will contact you soon.'); form.reset(); }, 900);
  });

  // smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href'); if (href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'}); }
  }));

  const callBtn = document.getElementById('callBtn');
  if (callBtn) callBtn.addEventListener('click', ()=>{ window.location.href='tel:+919084075474'; });
});