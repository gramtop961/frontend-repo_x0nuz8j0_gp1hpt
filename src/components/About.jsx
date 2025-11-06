import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Users } from 'lucide-react';

const data = [
  {
    icon: GraduationCap,
    title: 'AI Education',
    text: 'Led workshops for classmates on prompt design, data ethics, and using AI as a study partner. Built hands-on activities that make concepts fun and practical.'
  },
  {
    icon: Brain,
    title: 'AI Mastery',
    text: 'Experienced with building chat assistants, fine-tuning small models, and connecting APIs to create useful school tools and creative projects.'
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Mentors beginners, shares resources, and collaborates on hackathon teams to ship ideas quickly with clear roles and friendly documentation.'
  }
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl text-slate-300"
        >
          I’m a high school student who treats AI like a creative toolkit. I enjoy simplifying
          complex ideas, turning notes into interactive lessons, and building interfaces that feel friendly and fast.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ icon: Icon, title, text }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-inner"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
