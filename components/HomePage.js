'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DISHES = [
  {
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=700&q=80',
    tag: 'Signature',
    name: 'Beef Wellington',
    price: '£58',
  },
  {
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=700&q=80',
    tag: "Chef's Choice",
    name: 'Dover Sole Meunière',
    price: '£62',
  },
  {
    img: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=700&q=80',
    tag: 'Desserts',
    name: 'Dark Chocolate Fondant',
    price: '£18',
  },
];

const EVENTS_PREVIEW = [
  {
    id: 1,
    date: '31 December 2025',
    title: "New Year's Eve Gala",
    price: '£295 per person',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    date: '14 February 2026',
    title: "Valentine's Dinner",
    price: '£185 per couple',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
  },
];

export default function HomePage({ navigate }) {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80';
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className={`hero-bg${bgLoaded ? ' loaded' : ''}`} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">London · Michelin Starred · Est. 2019</div>
          <h1 className="hero-title">
            Maison<br /><em>Éclat</em>
          </h1>
          <p className="hero-sub">Where European tradition meets contemporary artistry</p>
          <div className="hero-actions">
            <button className="btn-gold"    onClick={() => navigate('reservations')}>Reserve a Table</button>
            <button className="btn-outline" onClick={() => navigate('menu')}>View Menu</button>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── About ── */}
      <section className="sec">
        <div className="max about-grid">
          <div className="about-img-wrap">
            <div className="about-corner" />
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80"
              alt="Maison Éclat dining room"
              style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }}
            />
            <div className="about-badge">Est. London 2019</div>
          </div>
          <div className="about-text">
            <div className="label">Our Story</div>
            <h2 className="sh">A <em>passion</em> for<br />perfection</h2>
            <div className="divider" />
            <p>
              Maison Éclat was born from a singular belief: that dining is theatre, nourishment, and
              memory in equal measure. Nestled in the heart of St. James's, our kitchen is led by
              Executive Chef François Vidal, whose culinary journey spans Lyon, San Sebastián, and Copenhagen.
            </p>
            <p>
              Each plate is a study in European classicism — techniques learned under legendary masters,
              reimagined with the finest seasonal ingredients sourced from trusted artisan producers
              across Britain and the Continent.
            </p>
            <div className="stats">
              <div><div className="stat-num">2★</div><div className="stat-lbl">Michelin Stars</div></div>
              <div><div className="stat-num">18</div><div className="stat-lbl">Tables Only</div></div>
              <div><div className="stat-num">900+</div><div className="stat-lbl">Wine Labels</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Dishes ── */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="max">
          <div className="dishes-hdr">
            <div className="label">Signatures</div>
            <h2 className="sh">The <em>Art</em> of the Plate</h2>
            <div className="divider c" />
          </div>
          <div className="dishes-grid">
            {DISHES.map((d, i) => (
              <div className="dish fade-in" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <img src={d.img} alt={d.name} />
                <div className="dish-overlay">
                  <div className="dish-tag">{d.tag}</div>
                  <div className="dish-name">{d.name}</div>
                  <div className="dish-price">{d.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button className="btn-outline" onClick={() => navigate('menu')}>Explore Full Menu</button>
          </div>
        </div>
      </section>

      {/* ── Events Strip ── */}
      <div className="events-strip">
        <div className="label">Upcoming</div>
        <h2 className="sh">Special <em>Events</em></h2>
        <div className="divider c" />
        <div className="events-mini-grid" style={{ maxWidth: 900, margin: '48px auto 0' }}>
          {EVENTS_PREVIEW.map((e) => (
            <div className="event-mini" key={e.id} onClick={() => navigate('events')}>
              <img src={e.img} alt={e.title} />
              <div className="event-mini-content">
                <div className="event-mini-date">{e.date}</div>
                <div className="event-mini-name">{e.title}</div>
                <div className="event-mini-price">{e.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-outline" style={{ marginTop: 32 }} onClick={() => navigate('events')}>
          View All Events
        </button>
      </div>
    </>
  );
}
