/* site.js — shared header + footer for Laura Denby résumé pages.
   Each page sets <body data-page="about"> and includes
   <div id="site-header"></div> ... <div id="site-footer"></div>. */
(function () {
  var NAV = [
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'experience.html', label: 'Experience', key: 'experience' },
    { href: 'ai.html', label: 'AI Practice', key: 'ai' },
    { href: 'portfolio.html', label: 'Portfolio', key: 'portfolio' },
    { href: 'credentials.html', label: 'Credentials', key: 'credentials' }
  ];

  function headerHTML(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '" class="' + (n.key === active ? 'is-active' : '') + '">' + n.label + '</a>';
    }).join('');
    return (
      '<div class="site-header__inner">' +
        '<a class="brand" href="about.html" aria-label="Laura Denby home">' +
          '<b>Laura Denby</b>' +
        '</a>' +
        '<nav class="site-nav">' + links +
          '<a href="contact.html" class="nav-cta ' + (active === 'contact' ? 'is-active' : '') + '">Get in touch</a>' +
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
        '<div class="foot-cta">' +
          '<div>' +
            '<div class="eyebrow" style="color:var(--clay-600)">Let\u2019s talk</div>' +
            '<h2>Looking for a BA who can bridge business, tech and AI?</h2>' +
            '<p>I take on a small number of engagements at a time, so you get my actual attention.</p>' +
          '</div>' +
          '<a class="btn btn--on-dark btn--lg" href="contact.html">Get in touch <i class="ic" data-lucide="arrow-right"></i></a>' +
        '</div>' +
        '<div class="foot-base">' +
          '<a class="brand" href="about.html"><b>Laura Denby</b></a>' +
          '<nav class="foot-nav">' + links + '<a href="htc.html">Her Tech Circle</a><a href="contact.html">Contact</a></nav>' +
          '<span class="foot-copy">\u00A9 2026 Laura Denby \u00B7 IT Business Analyst</span>' +
        '</div>' +
      '</div>'
    );
  }

  function init() {
    var active = document.body.getAttribute('data-page') || '';
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h) { h.className = 'site-header'; h.innerHTML = headerHTML(active); }
    if (f) { f.className = 'site-footer'; f.innerHTML = footerHTML(); }

    // scrolled state
    if (h) {
      var onScroll = function () { h.classList.toggle('is-scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
