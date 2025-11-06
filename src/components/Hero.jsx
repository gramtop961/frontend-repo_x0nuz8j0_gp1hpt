import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 pb-24 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-xs text-slate-200 backdrop-blur"
        >
          <Sparkles size={14} className="text-indigo-300" />
          <span>AI-native student portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
          className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Avery</span> —
          <br className="hidden sm:block" />
          a 16-year-old building with AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
          className="mt-5 max-w-2xl text-slate-300"
        >
          I design, prototype, and ship AI-first projects — from smart study tools to
          interactive chat tutors. I also teach peers how to use AI responsibly and creatively.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
          >
            <Rocket size={18} />
            See projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/50 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800/70"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
