/* ========================================
   PRAISE OKWUCHI PORTFOLIO - SCRIPTS
   ======================================== */

// Scroll Reveal Animation
const obs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      obs.unobserve(e.target);
    }
  });
}, { threshold: .06 });

document.querySelectorAll('.r').forEach(el => obs.observe(el));

// Navigation Active State
const scs = document.querySelectorAll('section[id]');
const lks = document.querySelectorAll('.nav-ul a');

window.addEventListener('scroll', () => {
  let c = '';
  scs.forEach(s => {
    if (window.scrollY >= s.offsetTop - 160) c = s.id;
  });
  lks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + c ? 'var(--o400)' : '';
  });
}, { passive: true });

// Form Submission
document.getElementById('sBtn').addEventListener('click', function() {
  this.innerHTML = 'Message Sent <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 7.5l4 4 5-5"/></svg>';
  this.style.background = 'var(--o500)';
  
  setTimeout(() => {
    this.innerHTML = 'Send Message <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 7.5h9M8 4l4 3.5L8 11"/></svg>';
    this.style.background = '';
  }, 3500);
});
