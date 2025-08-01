// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Youtube from './components/Youtube';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;