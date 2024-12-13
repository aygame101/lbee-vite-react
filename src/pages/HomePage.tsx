import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Events } from '../components/Events';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Menu />
      <Events />
      <Contact />
    </div>
  );
}