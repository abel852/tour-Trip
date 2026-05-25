import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import QuickActions from './components/QuickActions.tsx';
import Home from './pages/Home.tsx';
import Tours from './pages/Tours.tsx';
import TourDetail from './pages/TourDetail.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Gallery from './pages/Gallery.tsx';
import Blog from './pages/Blog.tsx';
import FAQ from './pages/FAQ.tsx';
import Testimonials from './pages/Testimonials.tsx';
import BookingConfirmed from './pages/BookingConfirmed.tsx';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:slug" element={<TourDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          </Routes>
        </main>

        <Footer />
        <QuickActions />
      </div>
    </Router>
  );
}

export default App;
