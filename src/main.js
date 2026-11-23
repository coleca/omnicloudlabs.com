import './styles.css';

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealNodes = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
}

// Track key CTA and outbound clicks in Google Analytics (GA4) when loaded
document.querySelectorAll('a[href^="mailto:"], a[data-track]').forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') {
      const href = link.getAttribute('href') || '';
      const label = link.dataset.track || (href.startsWith('mailto:') ? 'contact_email_click' : 'cta_click');
      window.gtag('event', label, {
        link_url: href,
        link_text: link.textContent.trim(),
      });
    }
  });
});
