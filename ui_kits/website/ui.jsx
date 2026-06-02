/* ui.jsx — primitives for the Avery Sloane website kit
   Exports: Logo, Button, Eyebrow, Tag, Icon  (to window) */

function Icon({ name, size = 20, stroke = 1.75, className, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    window.lucide.createIcons({
      attrs: { 'stroke-width': stroke, width: size, height: size },
      nameAttr: 'data-lucide',
    });
  }, [name, size, stroke]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

function Logo({ size = 30, color, inverse }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <img src={inverse ? '../../assets/mark.svg' : '../../assets/mark.svg'} width={size} height={size} alt="" />
      <span style={{
        fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: Math.round(size * 0.63),
        letterSpacing: '-0.01em', lineHeight: 1, whiteSpace: 'nowrap',
        color: color || (inverse ? 'var(--fg-on-dark)' : 'var(--fg-1)'),
      }}>Avery Sloane</span>
    </span>
  );
}

function Eyebrow({ children, style }) {
  return <div className="as-eyebrow" style={style}>{children}</div>;
}

function Tag({ children, tone = 'neutral' }) {
  return <span className={`as-tag as-tag--${tone}`}>{children}</span>;
}

function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, href, type }) {
  const cls = `as-btn as-btn--${variant} as-btn--${size}`;
  const inner = (
    <React.Fragment>
      {icon && <Icon name={icon} size={size === 'lg' ? 19 : 17} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={size === 'lg' ? 19 : 17} />}
    </React.Fragment>
  );
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick} type={type || 'button'}>{inner}</button>;
}

Object.assign(window, { Icon, Logo, Eyebrow, Tag, Button });
