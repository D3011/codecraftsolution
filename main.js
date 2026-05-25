/* ── SCROLL PROGRESS ── */
const prog = document.getElementById('progress');
if(prog) window.addEventListener('scroll', () => {
  prog.style.width = (window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
});

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:.06});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));

/* ── COUNT-UP ── */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count);
  let current = 0;
  const step = () => { current++; el.textContent = current+'+'; if(current<target) setTimeout(step,100); };
  setTimeout(step, 600);
});

/* ── WHATSAPP FORM ── */
function sendToWhatsApp() {
  const name     = document.getElementById('fname')?.value.trim();
  const business = document.getElementById('fbusiness')?.value.trim();
  const service  = document.getElementById('fservice')?.value;
  const message  = document.getElementById('fmessage')?.value.trim();
  if(!name||!business||!service){ alert('Please fill in your name, business name, and select a service.'); return; }
  const text = `Hi CodeCraft Solutions! 👋\n\n*Name:* ${name}\n*Business:* ${business}\n*Service Needed:* ${service}\n`
    +(message?`*Details:* ${message}\n`:'')+`\nLooking forward to hearing from you!`;
  window.open(`https://wa.me/916382639957?text=${encodeURIComponent(text)}`,'_blank');
}

/* ── MOBILE MENU ── */
function openMobile()  { document.getElementById('mobileMenu')?.classList.add('open'); }
function closeMobile() { document.getElementById('mobileMenu')?.classList.remove('open'); }
document.getElementById('mobileClose')?.addEventListener('click', closeMobile);

/* ── ACTIVE NAV HIGHLIGHT ── */
(function(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if(href === page || (page===''&&href==='index.html')) a.classList.add('active');
  });
})();
