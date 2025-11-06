import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          Avery <span className="text-indigo-300">AI</span>
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
