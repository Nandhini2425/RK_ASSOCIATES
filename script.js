const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? '✕' : '☰';
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
  }));
}
const filterButtons = document.querySelectorAll('.filter-btn');
const posterCards = document.querySelectorAll('.poster-grid figure');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  const category = button.dataset.filter;
  posterCards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
const form = document.getElementById('contactForm');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `Hello RK Associates, I would like a call back.\nName: ${data.get('name')}\nMobile: ${data.get('phone')}\nService: ${data.get('service')}\nMessage: ${data.get('message') || 'Not specified'}`;
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = 'WhatsApp is opening. Please review your message and press Send.';
  window.open(`https://wa.me/919944448098?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
