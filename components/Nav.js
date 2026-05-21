'use client';

import { useState, useEffect } from 'react';

const LINKS = [
  ['home', 'Home'],
  ['menu', 'Menu'],
  ['reservations', 'Reservations'],
  ['events', 'Events'],
  ['contact', 'Contact'],
];

export default function Nav({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (p) => { navigate(p); setMobileOpen(false); };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => go('home')}>
          Maison Éclat
          <small>London · Fine Dining · Est. 2019</small>
        </div>

        <ul className="nav-links">
          {LINKS.map(([key, label]) => (
            <li key={key} className={page === key ? 'active' : ''} onClick={() => go(key)}>
              {label}
            </li>
          ))}
        </ul>

        <button className="nav-btn" onClick={() => go('reservations')}>
          Reserve a Table
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <ul className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {LINKS.map(([key, label]) => (
          <li key={key} onClick={() => go(key)}>{label}</li>
        ))}
        <li onClick={() => go('reservations')} style={{ color: 'var(--gold)' }}>
          Reserve a Table
        </li>
      </ul>
    </>
  );
}
