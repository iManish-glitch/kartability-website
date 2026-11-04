const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const recipient = 'accessiblegokarting@example.ca'; // CHANGE THIS to your real project email
  const subject = encodeURIComponent('Accessible Go-Karting website: ' + data.get('topic'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Email: ' + data.get('email') + '\n' +
    'Topic: ' + data.get('topic') + '\n\n' +
    data.get('message')
  );
  document.getElementById('formHelp').textContent =
    'Your email app should open with the message prepared. If it does not, email ' + recipient + ' directly.';
  window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
});
