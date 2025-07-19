import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../modules/mainPages/footer';
import { Topbar } from '../modules/mainPages/toolbar';

export default function MainLayout() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-primary-main">
      {/* Topbar with dynamic shadow on scroll */}
      <header
        className={`sticky top-0 z-50 bg-black py-2 transition-shadow ${
          hasScrolled ? 'shadow-[0_4px_12px_0_rgba(255,255,255,0.15)]' : ''
        }`}
      >
        <Topbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}