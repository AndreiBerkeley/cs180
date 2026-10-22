const dialog = document.querySelector('#image-dialog');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('#dialog-caption');
let previousFocus;

document.querySelectorAll('.image-link').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !dialog.showModal) return;
    event.preventDefault();
    previousFocus = link;
    dialogImage.src = link.href;
    dialogImage.alt = link.querySelector('img').alt;
    dialogCaption.textContent = link.closest('figure').querySelector('figcaption')?.textContent || dialogImage.alt;
    dialog.showModal();
  });
});
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => previousFocus?.focus());

const navLinks = [...document.querySelectorAll('.nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const current = entries.find(entry => entry.isIntersecting);
    if (!current) return;
    const link = navLinks.find(item => item.hash === '#' + current.target.id);
    if (!link) return;
    navLinks.forEach(item => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'location');
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
