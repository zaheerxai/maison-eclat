'use client';

const NAV_LINKS    = [['home','Home'],['menu','Menu'],['reservations','Reservations'],['events','Events'],['contact','Contact']];
const LEGAL_LINKS  = ['Privacy Policy','Terms of Use','Accessibility','Cookie Policy'];
const SOCIAL_LINKS = ['Instagram','Facebook','Twitter / X','TripAdvisor'];

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="max">
        <div className="footer-grid">

          {/* Brand blurb */}
          <div>
            <div className="footer-brand-name">Maison Éclat</div>
            <p className="footer-brand-desc">
              A destination of European culinary excellence in the heart of St. James's, London.
              Two Michelin Stars. Eighteen tables. One unforgettable evening.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="footer-heading">Navigate</div>
            <ul className="footer-links">
              {NAV_LINKS.map(([key, label]) => (
                <li key={key} onClick={() => navigate(key)}>{label}</li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="footer-heading">Legal</div>
            <ul className="footer-links">
              {LEGAL_LINKS.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="footer-heading">Follow Us</div>
            <ul className="footer-links">
              {SOCIAL_LINKS.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Maison Éclat Ltd. All rights reserved.</span>
          <span className="footer-ital">London · Since 2019</span>
        </div>
      </div>
    </footer>
  );
}
