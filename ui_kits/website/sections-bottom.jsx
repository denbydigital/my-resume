/* sections-bottom.jsx — About, Testimonial, Process, Footer
   Reads primitives from window; exports to window. */
const { Logo: L2, Button: Btn2, Eyebrow: Eb2, Icon: Ic2 } = window;

function Process() {
  const steps = [
    { n: '01', t: 'Intro call', d: 'A 30-minute conversation about where you are and what is in the way. No pitch.' },
    { n: '02', t: 'Scoping', d: 'A short paid diagnostic — I read the system and the team, and write up what I see.' },
    { n: '03', t: 'The work', d: 'A focused engagement, usually six to twelve weeks, with a clear weekly rhythm.' },
    { n: '04', t: 'Handoff', d: 'You keep a plan your team owns — not a dependency on me.' },
  ];
  return (
    <section className="as-section" id="process">
      <div className="as-wrap">
        <div className="as-section__head">
          <Eb2>How I work</Eb2>
          <h2 className="as-section__title">Calm, sequenced, and yours at the end.</h2>
        </div>
        <div className="as-grid-4">
          {steps.map((s) => (
            <div className="as-step" key={s.n}>
              <span className="as-step__n">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="as-quote-band">
      <div className="as-wrap as-quote">
        <Ic2 name="quote" size={34} stroke={1.5} />
        <blockquote>
          Avery has the rare gift of making a hard technical decision feel
          <span className="as-quote__em"> obvious in hindsight</span>. Our team came out
          faster, calmer, and far more confident.
        </blockquote>
        <div className="as-quote__by">
          <div className="as-avatar"><Ic2 name="user-round" size={20} stroke={1.5} /></div>
          <div>
            <strong>Priya Raman</strong>
            <span>VP Engineering, Hightide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="as-section as-section--sunk" id="about">
      <div className="as-wrap as-about">
        <div className="as-about__media">
          <div className="as-portrait as-portrait--lg">
            <Ic2 name="user-round" size={72} stroke={1.1} />
            <span>headshot</span>
          </div>
        </div>
        <div className="as-about__copy">
          <Eb2>About</Eb2>
          <h2 className="as-section__title">Fifteen years building and rescuing platforms.</h2>
          <p>These days I help teams skip the mistakes I already made. I have been a staff
            engineer, a head of platform, and the person quietly called in when a launch is
            slipping — so I read both the code and the room.</p>
          <p>I work with a small number of clients at a time, which means you get my actual
            attention, not a deck handed off to a junior. Plain-spoken, senior, and genuinely
            easy to work with.</p>
          <ul className="as-facts">
            <li><Ic2 name="map-pin" size={17} /> Remote · US &amp; EU hours</li>
            <li><Ic2 name="clock" size={17} /> 6–12 week engagements</li>
            <li><Ic2 name="check-circle" size={17} /> Booking from Q3</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer({ onBook }) {
  return (
    <footer className="as-footer" id="contact">
      <div className="as-wrap">
        <div className="as-cta">
          <div>
            <Eb2 style={{ color: 'var(--clay-300)' }}>Let's talk</Eb2>
            <h2 className="as-cta__title">Have a platform decision you keep circling?</h2>
            <p>Book a free 30-minute intro call. Worst case, you leave with a clearer head.</p>
          </div>
          <Btn2 variant="accent" size="lg" onClick={onBook} iconRight="arrow-right">Book an intro call</Btn2>
        </div>
        <div className="as-footer__base">
          <L2 size={26} inverse />
          <nav className="as-footer__nav">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="mailto:hello@averysloane.com">hello@averysloane.com</a>
          </nav>
          <span className="as-footer__copy">© 2026 Avery Sloane</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Process, Testimonial, About, Footer });
