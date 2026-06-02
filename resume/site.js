/* site.js — shared header, footer and mobile nav for Laura Denby résumé.
   Each page sets <body data-page="about"> and includes
   <header id="site-header"></header> … <footer id="site-footer"></footer>. */
(function () {
  var NAV = [
    { href: 'about.html',       label: 'About',       key: 'about' },
    { href: 'experience.html',  label: 'Experience',  key: 'experience' },
    { href: 'ai.html',          label: 'AI Practice', key: 'ai' },
    { href: 'portfolio.html',   label: 'Portfolio',   key: 'portfolio' },
    { href: 'credentials.html', label: 'Credentials', key: 'credentials' }
  ];

  /* ---- HTML builders ---- */

  function headerHTML(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="is-active" aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');
    return (
      '<div class="site-header__inner">' +
        '<a class="brand" href="about.html" aria-label="Laura Denby home"><b>Laura Denby</b></a>' +
        '<nav class="site-nav" aria-label="Primary">' +
          links +
          '<a href="contact.html" class="nav-cta' + (active === 'contact' ? ' is-active' : '') + '">Get in touch</a>' +
        '</nav>' +
        '<button class="nav-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav" aria-haspopup="dialog">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>'
    );
  }

  function mobileNavHTML(active) {
    var links = NAV.map(function (n) {
      return (
        '<a href="' + n.href + '" class="mnav__link' + (n.key === active ? ' is-active' : '') + '"' +
          (n.key === active ? ' aria-current="page"' : '') + '>' +
          n.label +
        '</a>'
      );
    }).join('');
    return (
      '<div class="mnav__inner">' +
        '<nav aria-label="Mobile navigation">' +
          links +
        '</nav>' +
        '<a href="contact.html" class="mnav__cta' + (active === 'contact' ? ' is-active' : '') + '">Get in touch</a>' +
      '</div>'
    );
  }

  function footerHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '">' + n.label + '</a>';
    }).join('');
    return (
      '<div class="wrap">' +
        '<div class="foot-cta">' +
          '<div>' +
            '<div class="eyebrow" style="color:var(--clay-600)">Let’s talk</div>' +
            '<h2>Looking for a BA who can bridge business, tech and AI?</h2>' +
            '<p>I take on a small number of engagements at a time, so you get my actual attention.</p>' +
          '</div>' +
          '<a class="btn btn--on-dark btn--lg" href="contact.html">Get in touch <i class="ic" data-lucide="arrow-right"></i></a>' +
        '</div>' +
        '<div class="foot-base">' +
          '<a class="brand" href="about.html"><b>Laura Denby</b></a>' +
          '<nav class="foot-nav" aria-label="Footer">' + links + '<a href="htc.html">Her Tech Circle</a><a href="contact.html">Contact</a></nav>' +
          '<span class="foot-copy">© 2026 Laura Denby · IT Business Analyst</span>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---- Mobile nav controller ---- */

  var burger, mobileNav, focusable;

  function openNav() {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    mobileNav.classList.add('is-open');
    mobileNav.removeAttribute('aria-hidden');
    document.body.classList.add('nav-open');
    // Focus first link for keyboard users
    var first = mobileNav.querySelector('a, button');
    if (first) setTimeout(function () { first.focus(); }, 50);
  }

  function closeNav() {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
    burger.focus();
  }

  function toggleNav() {
    burger.getAttribute('aria-expanded') === 'true' ? closeNav() : openNav();
  }

  /* ---- Init ---- */

  function init() {
    var active = document.body.getAttribute('data-page') || '';

    /* Header */
    var h = document.getElementById('site-header');
    if (h) {
      h.className = 'site-header';
      h.innerHTML = headerHTML(active);
      h.setAttribute('role', 'banner');

      /* Scrolled border */
      var onScroll = function () { h.classList.toggle('is-scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* Footer */
    var f = document.getElementById('site-footer');
    if (f) { f.className = 'site-footer'; f.innerHTML = footerHTML(); }

    /* Mobile nav — appended to body so it sits outside any stacking context */
    mobileNav = document.createElement('div');
    mobileNav.id = 'mobile-nav';
    mobileNav.className = 'mobile-nav';
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.setAttribute('role', 'dialog');
    mobileNav.setAttribute('aria-label', 'Navigation menu');
    mobileNav.innerHTML = mobileNavHTML(active);
    document.body.appendChild(mobileNav);

    /* Burger */
    burger = document.getElementById('nav-burger');
    if (burger) {
      burger.addEventListener('click', toggleNav);

      /* Close on ESC */
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
          closeNav();
        }
      });

      /* Close when a nav link is clicked */
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          document.body.classList.remove('nav-open');
        });
      });

      /* Basic focus trap: if Tab reaches end, wrap to burger */
      mobileNav.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab') return;
        var links = Array.from(mobileNav.querySelectorAll('a'));
        if (!links.length) return;
        var last = links[links.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          burger.focus();
        }
        if (e.shiftKey && document.activeElement === links[0]) {
          e.preventDefault();
          burger.focus();
        }
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
