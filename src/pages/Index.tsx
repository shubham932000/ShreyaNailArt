import { useEffect } from 'react';
import CursorTrail from '@/components/CursorTrail';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
