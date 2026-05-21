'use client';

import { useState } from 'react';

const MENU = {
  starters: [
    { name: 'Seared Foie Gras',          desc: 'Brioche crumble, Sauternes gel, port reduction, micro herbs',             price: '£28' },
    { name: 'Burrata & Heirloom Tomatoes',desc: 'Aged balsamic, basil oil, sea salt flakes, grissini',                    price: '£22' },
    { name: 'Hand-Cured Scottish Salmon', desc: 'Crème fraîche, Exmoor caviar, dill oil, cucumber ribbons',               price: '£32' },
    { name: 'Wild Mushroom Velouté',      desc: 'Périgord truffle foam, chive oil, sourdough croutons',                   price: '£18' },
    { name: 'Cornish Crab Royale',        desc: 'Hand-picked white meat, avocado, citrus, oscietra caviar',               price: '£36' },
  ],
  mains: [
    { name: 'Beef Wellington',            desc: '28-day dry-aged fillet, duxelles, pomme purée, Bordelaise jus',          price: '£58' },
    { name: 'Pan-Seared Halibut',         desc: 'Champagne beurre blanc, samphire, Jersey Royals, fennel oil',            price: '£52' },
    { name: 'Rack of Lamb Provençal',     desc: 'Herbed crust, ratatouille, Niçoise jus, lavender essence',               price: '£56' },
    { name: 'Black Truffle Risotto',      desc: 'Aged Parmesan, chive oil, Périgord truffle, crisp shallots',             price: '£42' },
    { name: 'Dover Sole Meunière',        desc: 'Brown butter, capers, lemon purée, asparagus, wilted greens',            price: '£62' },
  ],
  desserts: [
    { name: 'Vanilla Crème Brûlée',       desc: 'Madagascan bourbon vanilla, fresh raspberries, almond tuile',           price: '£16' },
    { name: 'Dark Chocolate Fondant',     desc: 'Salted caramel heart, praline crumb, Tahitian vanilla ice cream',        price: '£18' },
    { name: 'Tarte Tatin',               desc: 'Normandy apple, Calvados cream, clotted cream sorbet',                   price: '£16' },
    { name: 'Île Flottante',             desc: 'Soft meringue, crème anglaise, praline, 24-carat gold leaf',             price: '£14' },
    { name: 'British Cheese Plateau',    desc: 'Seasonal selection, quince paste, walnut bread, honeycomb',              price: '£24' },
  ],
  wine: [
    { name: 'Louis Roederer Cristal 2015',    desc: 'Champagne, France — By the bottle',                                 price: '£420' },
    { name: 'Château Margaux 2018',           desc: 'Bordeaux, France — Premier Grand Cru Classé, 75cl',                 price: '£380' },
    { name: 'Domaine Leroy Musigny 2016',     desc: 'Burgundy, France — Grand Cru, 75cl',                               price: '£850' },
    { name: 'Opus One 2019',                  desc: 'Napa Valley, USA — By the bottle',                                  price: '£480' },
    { name: 'Maison Éclat House Selection',   desc: 'Red or white, France — By the glass',                              price: 'from £12' },
  ],
};

const TABS = [
  ['starters', 'Starters'],
  ['mains',    'Mains'],
  ['desserts', 'Desserts'],
  ['wine',     'Wine & Spirits'],
];

const COURSES = ['Amuse-Bouche','Cold Starter','Warm Starter','Fish Course','Pre-Dessert','Main Course','Cheese or Dessert'];

export default function MenuPage() {
  const [tab, setTab] = useState('starters');

  return (
    <>
      <div className="page-header">
        <div className="label">À La Carte & Tasting</div>
        <h1 className="sh">Our <em>Menu</em></h1>
        <div className="divider c" />
      </div>

      <section className="sec">
        <div className="max">

          {/* Tasting Menu card */}
          <div className="tasting-card">
            <div className="label">Chef's Selection</div>
            <h2 className="sh">The Tasting <em>Experience</em></h2>
            <div className="tasting-price">£185</div>
            <div className="tasting-sub">per person · wine pairing +£95 · vegetarian menu available</div>
            <div className="tasting-courses">
              {COURSES.map((c) => <div className="tasting-course" key={c}>{c}</div>)}
            </div>
          </div>

          {/* Category tabs */}
          <div className="menu-tabs">
            {TABS.map(([key, label]) => (
              <button
                key={key}
                className={`menu-tab${tab === key ? ' active' : ''}`}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="menu-items">
            {MENU[tab].map((item, i) => (
              <div className="menu-item" key={i}>
                <div>
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-desc">{item.desc}</div>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>

          {/* Allergen note */}
          <p style={{ textAlign: 'center', marginTop: 48, fontSize: 12, color: 'var(--muted)', fontStyle: 'italic' }}>
            All prices include VAT. A discretionary 12.5% service charge will be added to your bill.
            Please inform your server of any allergies or dietary requirements.
          </p>

        </div>
      </section>
    </>
  );
}
