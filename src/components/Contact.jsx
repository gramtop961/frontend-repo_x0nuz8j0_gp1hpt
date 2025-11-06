import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Fake delay for demo UX
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I will get back soon.');
  };

  return (
    <section id="contact" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-2xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Get in touch
        </motion.h2>

        <p className="mt-3 text-slate-300">
          Want to collaborate or invite me to speak about AI for students? Send a message.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              className="rounded-lg border border-slate-700/70 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500/70"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="rounded-lg border border-slate-700/70 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500/70"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="rounded-lg border border-slate-700/70 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500/70"
              placeholder="Hi Avery, I’d love to chat about..."
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
          >
            <Send size={18} />
            <span>Send message</span>
          </button>
          {status && (
            <div className="flex items-center gap-2 text-sm text-emerald-300">
              <Mail size={16} /> {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
