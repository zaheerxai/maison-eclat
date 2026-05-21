'use client';

const CONTACT_ITEMS = [
  {
    label: 'Address',
    value: "14 St. James's Street",
    sub:   'London, SW1A 1PS, United Kingdom',
  },
  {
    label: 'Reservations',
    value: '+44 (0)20 7123 4567',
    sub:   'Lines open 10:00 – 22:00, Tuesday to Sunday',
  },
  {
    label: 'Email',
    value: 'reservations@maisoneclat.co.uk',
    sub:   'We aim to respond within 2 hours during service',
  },
  {
    label: 'Private Dining & Events',
    value: 'events@maisoneclat.co.uk',
    sub:   'Groups of 8+, corporate functions, private hire',
  },
  {
    label: 'Nearest Tube',
    value: 'Green Park · Piccadilly Circus',
    sub:   'Victoria, Jubilee & Piccadilly lines',
  },
];

const HOURS = [
  ['Monday',             'Closed'],
  ['Tuesday – Thursday', '18:30 – 22:00'],
  ['Friday – Saturday',  '12:00 – 14:30 · 18:30 – 22:30'],
  ['Sunday',             '12:00 – 15:00'],
];

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Get in Touch</div>
        <h1 className="sh">Find <em>Us</em></h1>
        <div className="divider c" />
      </div>

      <section className="sec">
        <div className="max contact-grid">

          {/* Left — contact details */}
          <div>
            {CONTACT_ITEMS.map((c) => (
              <div className="contact-item" key={c.label}>
                <div className="contact-lbl">{c.label}</div>
                <div className="contact-val">{c.value}</div>
                <div className="contact-sub">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Right — map placeholder + hours */}
          <div>
            <div className="map-box">
              <div style={{ fontSize: 32, color: 'var(--gold)' }}>✦</div>
              <div className="map-lbl">Maison Éclat, London</div>
              <div className="map-addr">
                14 St. James's Street<br />
                London, SW1A 1PS
              </div>
              <button
                className="btn-outline"
                style={{ fontSize: '8px', marginTop: 6 }}
                onClick={() =>
                  window.open(
                    'https://maps.google.com/?q=14+St+James+Street+London+SW1A+1PS',
                    '_blank'
                  )
                }
              >
                Open in Google Maps
              </button>
            </div>

            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--bdr)',
              padding: '26px',
              marginTop: 3,
            }}>
              <div className="label" style={{ marginBottom: 11 }}>Opening Hours</div>
              {HOURS.map(([day, time]) => (
                <div className="hours-row" key={day}>
                  <span className="hours-day">{day}</span>
                  <span className="hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
