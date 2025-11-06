import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Avery AI — Built with love and curiosity.
      </footer>
    </div>
  );
};

export default App;
