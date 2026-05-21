'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import MenuPage from '@/components/MenuPage';
import ReservationsPage from '@/components/ReservationsPage';
import EventsPage from '@/components/EventsPage';
import ContactPage from '@/components/ContactPage';

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
