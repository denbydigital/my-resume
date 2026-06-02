/* sections-top.jsx — Header, Hero, Services, Work
   Reads primitives from window; exports sections to window. */
const { Logo, Button, Eyebrow, Tag, Icon } = window;

function Header({ onBook }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.as-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`as-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="as-header__inner">
        <a href="#top" className="as-header__logo"><Logo size={30} /></a>
        <nav className="as-nav">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <Button variant="primary" size="sm" onClick={onBook} iconRight="arrow-right">Book a call</Button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section className="as-hero" id="top">
      <div className="as-wrap as-hero__grid">
        <div className="as-hero__copy">
          <Eyebrow>Independent software consultant</Eyebrow>
          <h1 className="as-hero__title">
            I help growing teams ship the <span className="as-underline">right thing</span>, faster.
          </h1>
          <p className="as-hero__lede">
            Strategy, architecture, and hands-on delivery — for the messy middle
            between a working prototype and a platform you can bet the company on.
          </p>
          <div className="as-hero__actions">
            <Button variant="primary" size="lg" onClick={onBook} iconRight="arrow-right">Book an intro call</Button>
            <Button variant="secondary" size="lg" href="#work">See how I work</Button>
          </div>
          <div className="as-hero__proof">
            <span>Trusted by teams at</span>
            <div className="as-logos">
              <span>Northwind</span><span>Hightide</span><span>Castell</span><span>Forma</span>
            </div>
          </div>
        </div>
        <div className="as-hero__card">
          <div className="as-portrait" aria-label="Portrait placeholder">
            <Icon name="user-round" size={56} stroke={1.25} />
            <span>headshot</span>
          </div>
          <div className="as-portrait__meta">
            <div>
              <strong>Avery Sloane</strong>
              <span>15 years building & rescuing platforms</span>
            </div>
            <span className="as-status"><i></i>Booking Q3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: 'compass', t: 'Architecture reviews', d: "A clear-eyed read on what's holding your system back, and a sequenced plan to fix it without stopping the line." },
  { icon: 'route', t: 'Technical strategy', d: "Turn a fuzzy roadmap into a sequence of bets your team can actually ship — and defend to the board." },
  { icon: 'gauge', t: 'Delivery & rescue', d: "Hands-on help when a launch is slipping. I embed with the team, unblock the path, and hand it back healthier." },
  { icon: 'users', t: 'Team coaching', d: "Level up senior engineers and tech leads with the judgement that usually takes a decade to earn." },
];

function Services() {
  return (
    <section className="as-section" id="services">
      <div className="as-wrap">
        <div className="as-section__head">
          <Eyebrow>What I do</Eyebrow>
          <h2 className="as-section__title">Four ways I help — pick what your team needs.</h2>
        </div>
        <div className="as-grid-4">
          {SERVICES.map((s) => (
            <article className="as-card as-service" key={s.t}>
              <div className="as-service__ic"><Icon name={s.icon} size={21} /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a className="as-link" href="#work">Learn more <Icon name="arrow-right" size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WORK = [
  { tag: 'Fintech · Series C', t: 'Cut deploy time from 40 minutes to 6', d: 'Re-platformed a brittle monolith pipeline and coached the team through a zero-downtime cutover.', metric: '6.6×', metricLabel: 'faster deploys' },
  { tag: 'Marketplace · Series B', t: 'Untangled a platform two teams could share', d: 'Defined service boundaries and a migration sequence that let mobile and web stop stepping on each other.', metric: '2', metricLabel: 'teams unblocked' },
  { tag: 'Healthtech · Scale-up', t: 'Rescued a launch that was three months late', d: 'Embedded for eight weeks, cut scope to the spine, and shipped — then left the team a roadmap they owned.', metric: '8 wks', metricLabel: 'to ship' },
];

function Work() {
  return (
    <section className="as-section as-section--sunk" id="work">
      <div className="as-wrap">
        <div className="as-section__head">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="as-section__title">A few engagements, plainly described.</h2>
        </div>
        <div className="as-grid-3">
          {WORK.map((w) => (
            <article className="as-card as-work" key={w.t}>
              <Tag tone="pine">{w.tag}</Tag>
              <h3>{w.t}</h3>
              <p>{w.d}</p>
              <div className="as-work__metric">
                <strong>{w.metric}</strong>
                <span>{w.metricLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Services, Work });
