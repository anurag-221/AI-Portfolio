
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

export const Projects: React.FC<{ isDarkMode: boolean }> = () => {
  const projects = [
    {
      title: "Kumbh Mela Website",
      category: "Event Platform",
      image: "https://picsum.photos/800/500?random=11",
      tech: ["React", "Tailwind", "JSON", "Framer Motion"],
      features: ["Dynamic event slider", "Countdown timers", "Fully responsive UI"],
      role: "Lead Frontend Development & UI Logic",
      link: "#",
      github: "#"
    },
    {
      title: "Expense Tracker App",
      category: "Finance Utility",
      image: "https://picsum.photos/800/500?random=12",
      tech: ["React", "Expo", "JavaScript", "Context API"],
      features: ["Expense management", "Interactive Charts", "Android/iOS Cross-platform"],
      role: "Component Architecture & Debugging",
      link: "#",
      github: "#"
    },
    {
      title: "Enterprise Client Work",
      category: "Corporate Projects",
      image: "https://picsum.photos/800/500?random=13",
      tech: ["React", "Algolia", "TypeScript", "Vite"],
      features: ["Advanced search logic", "Custom UI libraries", "Feature development"],
      role: "Feature Lead & Performance Optimization",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
              <span className="text-cyan-400">02.</span> Selected Work
            </h2>
            <p className="text-slate-400">A collection of projects where I've implemented clean, maintainable code and engaging user experiences.</p>
          </div>
          <a href="#" className="mono text-cyan-400 hover:underline flex items-center gap-2 mb-2 transition-all">
            View All Projects <Code size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20"
                  >
                    <Github size={22} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link} 
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20"
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-slate-900 text-xs font-bold rounded-full uppercase tracking-tighter">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="mono text-[10px] uppercase tracking-widest text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.role}: {project.features[0]}.
              </p>
              
              <ul className="space-y-1 mb-6">
                {project.features.slice(1).map((f, i) => (
                  <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                    <div className="h-1 w-1 bg-slate-600 rounded-full" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
