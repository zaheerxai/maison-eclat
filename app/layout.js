import './globals.css';

export const metadata = {
  title: 'Maison Éclat | Fine Dining London',
  description:
    'Two Michelin-starred fine dining in the heart of St. James\'s, London. Book your table at Maison Éclat.',
  keywords: 'fine dining London, Michelin star restaurant, St James restaurant, tasting menu London',
  openGraph: {
    title: 'Maison Éclat | Fine Dining London',
    description: 'Two Michelin-starred fine dining in the heart of St. James\'s, London.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
