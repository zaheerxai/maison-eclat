# Maison Éclat — Fine Dining Website

A production-ready Next.js 14 website for **Maison Éclat**, a fictional two Michelin-starred restaurant in London. Designed for the European fine dining market.

---

## Stack

| Layer       | Technology                       |
|-------------|----------------------------------|
| Framework   | Next.js 14 (App Router)          |
| Styling     | Global CSS (design tokens, zero deps) |
| Images      | Unsplash (next/image optimised)  |
| API         | Next.js Route Handlers           |
| Storage     | `localStorage` (client) + Vercel KV (production path) |
| Deployment  | Vercel                           |

---

## Pages

| Route             | Description                                      |
|-------------------|--------------------------------------------------|
| `/`               | Homepage — hero, about, signature dishes, events |
| `?page=menu`      | À la carte menu + tasting menu                  |
| `?page=reservations` | Booking form + confirmation screen            |
| `?page=events`    | Special events & private dining                  |
| `?page=contact`   | Location, phone, email, hours                    |

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo — Vercel auto-detects Next.js
4. Click **Deploy** — done in ~90 seconds

---

## Upgrading Reservation Storage to Vercel KV

The API route at `app/api/reservations/route.js` is pre-wired for Vercel KV. To activate:

```bash
# 1. Install the KV client
npm install @vercel/kv

# 2. In the Vercel dashboard → Storage → Create KV Database
#    Then pull env vars:
vercel env pull .env.local
```

Then in `app/api/reservations/route.js`, uncomment:

```js
import { kv } from '@vercel/kv';
await kv.hset('reservations', { [bookingId]: JSON.stringify(reservation) });
```

---

## Customisation Checklist

- [ ] Replace restaurant name, address, phone, email in components
- [ ] Update `app/layout.js` metadata (title, description, OG image)
- [ ] Swap Unsplash images for real photography
- [ ] Add real Google Maps embed in `ContactPage.js`
- [ ] Configure email notifications (Resend / SendGrid) in the API route
- [ ] Add `NEXT_PUBLIC_` env vars for any public config

---

## Design Tokens

All colours and typography live in `app/globals.css` under `:root`:

```css
--gold:  #b8976a   /* primary accent */
--gold2: #d4b896   /* hover/highlight */
--bg:    #07070b   /* page background */
--cream: #f0ebe0   /* primary text */
```

---

## License

MIT — free to use, modify, and deploy for client projects.
