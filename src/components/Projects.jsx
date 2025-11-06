import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BookOpen, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'StudyBuddy Chat Tutor',
    icon: Bot,
    tags: ['Chat UI', 'RAG', 'Education'],
    description:
      'An interactive tutor that turns class notes into a private Q&A experience using retrieval-augmented generation. Helps explain topics and quizzes you with spaced repetition.'
  },
  {
    title: 'Notes-to-Flashcards',
    icon: BookOpen,
    tags: ['LLM', 'Automation'],
    description:
      'Converts messy notes into clean flashcards with answer hints and follow-up prompts. Exports to Anki and Quizlet formats.'
  },
  {
    title: 'Prompt Playground',
    icon: Sparkles,
    tags: ['Prompting', 'UI'],
    description:
      'A visual lab to compare prompts side-by-side, track changes, and share the best patterns with classmates.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, icon: Icon, description, tags }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 p-5"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700/70 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
