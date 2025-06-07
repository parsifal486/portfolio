'use client';
import { Navbar } from './componets/Navbar';
import { HomeSection } from './componets/HomeSection';
import { AboutMe } from './componets/AboutMe';
import { Works } from './componets/Works';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HomeSection />
      <AboutMe />
      <Works />
    </div>
  );
}
