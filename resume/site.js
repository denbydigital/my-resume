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
      '</div>'
    );
  }

  function footerHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '">' + n.label + '</a>';
    }).join('');
    return (
      '<div class="wrap">' +
        '<div class="foot-base">' +
          '<a class="brand" href="about.html"><b>Laura Denby</b></a>' +
          '<nav class="foot-nav" aria-label="Footer">' + links + '<a href="htc.html">Her Tech Circle</a></nav>' +
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

    // Load sparkle effects
    var sp = document.createElement('script');
    sp.src = 'sparkle.js';
    document.body.appendChild(sp);

    // Enable scroll reveal
    document.documentElement.classList.add('js-ready');
    var revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length && 'IntersectionObserver' in window) {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          revealObs.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
      revealEls.forEach(function (el) { revealObs.observe(el); });
    }

    // Count-up animation for [data-count] elements
    var counterEls = document.querySelectorAll('[data-count]');
    if (counterEls.length && 'IntersectionObserver' in window &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var counterObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = +el.getAttribute('data-count');
          var suffix = el.getAttribute('data-suffix') || '';
          var dur = 1400;
          var t0 = performance.now();
          (function tick(now) {
            var p = Math.min((now - t0) / dur, 1);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * ease) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }(performance.now()));
          counterObs.unobserve(el);
        });
      }, { threshold: 0.5 });
      counterEls.forEach(function (el) { counterObs.observe(el); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
