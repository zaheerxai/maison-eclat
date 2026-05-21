'use client';

const EVENTS = [
  {
    id:    1,
    date:  '31 December 2025',
    title: "New Year's Eve Gala",
    tag:   'Black Tie Event',
    desc:  'Seven courses, live jazz quartet, and a Champagne toast at midnight to welcome the new year in impeccable style.',
    price: '£295 per person',
    img:   'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:    2,
    date:  '14 February 2026',
    title: "Valentine's Day Menu",
    tag:   'Seasonal Special',
    desc:  'A curated five-course menu for two with complimentary Champagne on arrival and a rose-petal dessert.',
    price: '£185 per couple',
    img:   'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:    3,
    date:  'Now — August 2026',
    title: 'Summer Truffle Season',
    tag:   'Seasonal Menu',
    desc:  'A celebration of Périgord black truffle woven throughout our entire à la carte and tasting menus this summer.',
    price: 'Supplement from £40',
    img:   'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:    4,
    date:  'Year-Round',
    title: 'Private Dining & Events',
    tag:   'Private Hire',
    desc:  'Exclusive buyout of our private room for up to 24 guests, with bespoke menus crafted for your occasion.',
    price: 'From £3,500',
    img:   'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
  },
];

export default function EventsPage({ navigate }) {
  return (
    <>
      <div className="page-header">
        <div className="label">Experiences & Occasions</div>
        <h1 className="sh">Special <em>Events</em></h1>
        <div className="divider c" />
      </div>

      <section className="sec">
        <div className="max">
          <div className="events-grid">
            {EVENTS.map((e) => (
              <div className="event-card" key={e.id}>
                <img src={e.img} alt={e.title} />
                <div className="event-card-content">
                  <div className="event-badge">{e.tag}</div>
                  <div className="event-date">{e.date}</div>
                  <div className="event-title">{e.title}</div>
                  <div className="event-desc">{e.desc}</div>
                  <div className="event-price">{e.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Private dining CTA */}
          <div style={{ textAlign:'center', marginTop:48, borderTop:'1px solid var(--bdr)', paddingTop:48 }}>
            <div className="label">Group & Corporate</div>
            <h2 className="sh" style={{ marginBottom:14 }}>Private <em>Dining</em></h2>
            <p style={{ color:'var(--muted)', fontSize:14, maxWidth:560, margin:'0 auto 28px', lineHeight:1.8 }}>
              Host your next corporate dinner, milestone celebration, or intimate gathering in our
              exclusive private dining room. Capacity for up to 24 guests with fully bespoke menus
              designed around your occasion.
            </p>
            <button className="btn-gold" onClick={() => navigate('contact')}>Enquire Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
