'use client';

import { useState } from 'react';

const TIMES   = ['12:00','12:30','13:00','13:30','18:30','19:00','19:30','20:00','20:30','21:00','21:30'];
const GUESTS  = [1,2,3,4,5,6,7,8];
const HOURS   = [
  ['Monday',          'Closed'],
  ['Tuesday – Thursday', '18:30 – 22:00'],
  ['Friday – Saturday',  '12:00 – 14:30 · 18:30 – 22:30'],
  ['Sunday',          '12:00 – 15:00'],
];

const EMPTY = { name:'', email:'', phone:'', date:'', time:'', guests:'2', specialRequests:'' };

function formatDate(str) {
  try {
    return new Date(str + 'T12:00:00').toLocaleDateString('en-GB', {
      weekday:'long', year:'numeric', month:'long', day:'numeric',
    });
  } catch { return str; }
}

export default function ReservationsPage() {
  const [form,    setForm]    = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [booking, setBooking] = useState(null);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/reservations', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Booking failed');

      // Persist to localStorage as client-side record
      const stored = JSON.parse(localStorage.getItem('me_reservations') || '[]');
      stored.push(data.reservation);
      localStorage.setItem('me_reservations', JSON.stringify(stored));

      setBooking(data.reservation);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please call us to confirm.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setBooking(null); setForm(EMPTY); setError(''); };

  return (
    <>
      <div className="page-header">
        <div className="label">Book Your Table</div>
        <h1 className="sh">Make a <em>Reservation</em></h1>
        <div className="divider c" />
      </div>

      <section className="sec">
        <div className="res-layout">

          {/* Left — info + hours */}
          <div className="res-info">
            <h3>An Unforgettable Evening Awaits</h3>
            <p>
              We invite you to experience the art of fine dining at Maison Éclat. Our team is dedicated
              to crafting an evening tailored to your every need — from dietary requirements to the most
              cherished of celebrations.
            </p>
            <p>
              For groups of 8 or more, or private dining enquiries, please contact us directly at{' '}
              <span style={{ color:'var(--gold2)', fontStyle:'italic' }}>reservations@maisoneclat.co.uk</span>
            </p>
            <div className="hours-table">
              <div className="label" style={{ marginBottom: 12 }}>Opening Hours</div>
              {HOURS.map(([day, time]) => (
                <div className="hours-row" key={day}>
                  <span className="hours-day">{day}</span>
                  <span className="hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form or confirmation */}
          <div className="form-card">
            {!booking ? (
              <>
                <div className="form-title">Reserve Your Table</div>

                {error && (
                  <p style={{ color:'#e07070', fontSize:13, textAlign:'center', marginBottom:16, fontStyle:'italic' }}>
                    {error}
                  </p>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-input" required
                        value={form.name} placeholder="Your name"
                        onChange={(e) => set('name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        className="form-input" type="email" required
                        value={form.email} placeholder="your@email.com"
                        onChange={(e) => set('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        className="form-input" type="tel"
                        value={form.phone} placeholder="+44 7700 900000"
                        onChange={(e) => set('phone', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Guests *</label>
                      <select
                        className="form-select" required
                        value={form.guests} onChange={(e) => set('guests', e.target.value)}
                      >
                        {GUESTS.map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input
                        className="form-input" type="date" required
                        min={today} value={form.date}
                        onChange={(e) => set('date', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time *</label>
                      <select
                        className="form-select" required
                        value={form.time} onChange={(e) => set('time', e.target.value)}
                      >
                        <option value="">Select time</option>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Special Requests</label>
                    <textarea
                      className="form-textarea"
                      value={form.specialRequests}
                      placeholder="Dietary requirements, allergies, special occasions, seating preferences…"
                      onChange={(e) => set('specialRequests', e.target.value)}
                    />
                  </div>

                  <button className="btn-submit" type="submit" disabled={loading}>
                    {loading ? 'Confirming your reservation…' : 'Confirm Reservation'}
                  </button>
                </form>
              </>
            ) : (
              /* Confirmation */
              <div className="confirmation">
                <div className="conf-ring">✦</div>
                <div className="conf-id">Booking Ref: {booking.bookingId}</div>
                <h2>Reservation Confirmed</h2>
                <p>
                  Thank you, {booking.name}. We look forward to welcoming you.<br />
                  A confirmation has been sent to <em style={{ color:'var(--gold2)' }}>{booking.email}</em>
                </p>
                <div className="conf-box">
                  {[
                    ['Name',     booking.name],
                    ['Date',     formatDate(booking.date)],
                    ['Time',     booking.time],
                    ['Guests',   `${booking.guests} ${booking.guests == 1 ? 'Guest' : 'Guests'}`],
                    ...(booking.specialRequests ? [['Requests', booking.specialRequests]] : []),
                  ].map(([key, val]) => (
                    <div className="conf-row" key={key}>
                      <span className="conf-key">{key}</span>
                      <span className="conf-val">{val}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-gold" onClick={reset}>Make Another Reservation</button>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
