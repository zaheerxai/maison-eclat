'use client';

import { useState } from 'react';
import Nav from '@/components/Nav.js';
import Footer from '@/components/Footer.js';
import HomePage from '@/components/HomePage.js';
import MenuPage from '@/components/MenuPage.js';
import ReservationsPage from '@/components/ReservationsPage.js';
import EventsPage from '@/components/EventsPage.js';
import ContactPage from '@/components/ContactPage.js';

export default function Page() {
  const [page, setPage] = useState('home');

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Nav page={page} navigate={navigate} />

      {page === 'home'         && <HomePage navigate={navigate} />}
      {page === 'menu'         && <MenuPage />}
      {page === 'reservations' && <ReservationsPage />}
      {page === 'events'       && <EventsPage navigate={navigate} />}
      {page === 'contact'      && <ContactPage />}

      <Footer navigate={navigate} />
    </>
  );
}
