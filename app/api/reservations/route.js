import { NextResponse } from 'next/server';

/**
 * POST /api/reservations
 *
 * Stores a reservation. In production on Vercel, swap the `saveReservation`
 * function body to use @vercel/kv:
 *
 *   import { kv } from '@vercel/kv';
 *   await kv.hset('reservations', { [id]: data });
 *
 * For local dev, this just returns the booking reference.
 * The client also stores a copy in localStorage as a UI fallback.
 */

function generateId() {
  return 'ME-' + Math.random().toString(36).substr(2, 6).toUpperCase();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, date, time, guests, specialRequests } = body;

    if (!name || !email || !date || !time || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const bookingId = generateId();
    const reservation = {
      bookingId,
      name,
      email,
      phone: phone || '',
      date,
      time,
      guests,
      specialRequests: specialRequests || '',
      createdAt: new Date().toISOString(),
    };

    // ── Production: uncomment and install @vercel/kv ──────────────────────
    // import { kv } from '@vercel/kv';
    // await kv.hset('reservations', { [bookingId]: JSON.stringify(reservation) });
    // ─────────────────────────────────────────────────────────────────────────

    // ── Development: log to console ──────────────────────────────────────────
    console.log('[Reservation Created]', reservation);
    // ─────────────────────────────────────────────────────────────────────────

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (err) {
    console.error('[Reservations API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  // Protected endpoint — add auth before exposing in production
  return NextResponse.json({ message: 'Use POST to create a reservation.' }, { status: 405 });
}
