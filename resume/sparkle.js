/* sparkle.js — celebratory particle effects for lauradenby.com */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var CHARS  = ['✦', '✧', '⋆', '✺', '★', '✶', '·'];
  var COLORS = ['#F9B0D1','#FFE480','#E85498','#FFD040','#FCD9EA','#F380B4','#FFFBEB','#F5B800'];

  /* ---- core: one floating particle ---- */
  function particle(x, y, opts) {
    opts = opts || {};
    var el = document.createElement('span');
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:9999',
      'left:' + x + 'px',
      'top:' + y + 'px',
      'font-size:' + (opts.size || (9 + Math.random() * 10)) + 'px',
      'color:' + (opts.color || COLORS[Math.floor(Math.random() * COLORS.length)]),
      'user-select:none',
      'line-height:1',
    ].join(';');
    el.textContent = opts.char || CHARS[Math.floor(Math.random() * CHARS.length)];
    document.body.appendChild(el);

    var vx  = opts.vx  !== undefined ? opts.vx  : (Math.random() - 0.5) * 5;
    var vy  = opts.vy  !== undefined ? opts.vy  : (-2 - Math.random() * 4);
    var rot = (Math.random() - 0.5) * 540;
    var dur = opts.dur || (550 + Math.random() * 450);
    var t0  = performance.now();

    function tick(now) {
      var t = (now - t0) / dur;
      if (t >= 1) { el.remove(); return; }
      var ease = 1 - Math.pow(1 - t, 3);
      el.style.left      = (x + vx * ease * 52) + 'px';
      el.style.top       = (y + vy * ease * 52 + t * t * 45) + 'px'; // gravity
      el.style.opacity   = t < 0.15 ? 1 : (1 - (t - 0.15) / 0.85);
      el.style.transform = 'translate(-50%,-50%) rotate(' + (rot * t) + 'deg) scale(' + (1 - t * 0.35) + ')';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- burst: n particles from one point ---- */
  function burst(x, y, n, mini) {
    n = n || 10;
    for (var i = 0; i < n; i++) {
      var angle = (i / n) * Math.PI * 2 + Math.random() * 0.9;
      var spd   = mini ? (1.5 + Math.random() * 2) : (2.5 + Math.random() * 4);
      particle(x, y, {
        vx:  Math.cos(angle) * spd,
        vy:  Math.sin(angle) * spd - (mini ? 0.5 : 1.5),
        size: mini ? (6 + Math.random() * 7) : (9 + Math.random() * 11),
        dur:  mini ? (350 + Math.random() * 250) : (550 + Math.random() * 500),
      });
    }
  }

  /* ---- cursor sparkle trail — desktop (pointer: fine) only ---- */
  if (window.matchMedia('(pointer: fine)').matches) {
    var lastTrail = 0;
    document.addEventListener('mousemove', function (e) {
      var now = Date.now();
      if (now - lastTrail < 110 || Math.random() > 0.3) return;
      lastTrail = now;
      particle(e.clientX, e.clientY, { size: 7 + Math.random() * 8, dur: 480 });
    });
  }

  /* ---- button click — full burst ---- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn--primary,.btn--accent,.nav-cta,.cover__enter,.mnav__cta');
    if (!btn) return;
    var r = btn.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 14);
  });

  /* ---- tag hover — mini pop ---- */
  document.addEventListener('mouseenter', function (e) {
    var el = e.target.closest('.tag');
    if (!el) return;
    var r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 6, true);
  }, true);

  /* ---- stat numbers hover — celebration ---- */
  document.addEventListener('mouseenter', function (e) {
    var el = e.target.closest('.stat b');
    if (!el) return;
    var r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 12);
  }, true);

  /* ---- nav link hover — single sparkle ---- */
  document.addEventListener('mouseenter', function (e) {
    var el = e.target.closest('.site-nav a:not(.nav-cta)');
    if (!el) return;
    var r = el.getBoundingClientRect();
    particle(r.left + r.width / 2, r.top + r.height / 2, { size: 13, dur: 500 });
  }, true);

  /* ---- name on landing page — hover burst ---- */
  var nameEl = document.querySelector('.cover__name');
  if (nameEl) {
    var nameReady = true;
    nameEl.addEventListener('mouseenter', function () {
      if (!nameReady) return;
      nameReady = false;
      setTimeout(function () { nameReady = true; }, 800);
      var r = nameEl.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 18);
    });
  }

  /* ---- headings hover — gentle sparkle ---- */
  document.querySelectorAll('h1, h2').forEach(function (h) {
    if (h === nameEl) return; // landing name handled above
    h.addEventListener('mouseenter', function () {
      var r = h.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 7, true);
    });
  });

  /* ---- contact form success — triple-wave confetti ---- */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#contact-form [type="submit"]')) return;
    // Wait for the thanks state to appear, then celebrate
    setTimeout(function () {
      var thanks = document.querySelector('.thanks');
      if (!thanks) return;
      var r  = thanks.getBoundingClientRect();
      var cx = r.left + r.width  / 2;
      var cy = r.top  + r.height / 2;
      burst(cx, cy, 22);
      setTimeout(function () { burst(cx - 70, cy + 30, 14); }, 180);
      setTimeout(function () { burst(cx + 70, cy + 30, 14); }, 340);
      setTimeout(function () { burst(cx, cy - 20, 10, true); }, 500);
    }, 450);
  });

})();
