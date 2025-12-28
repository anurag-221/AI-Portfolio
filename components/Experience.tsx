
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC<{ isDarkMode: boolean }> = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Current Role",
      period: "2022 - Present",
      description: "Leading the UI development for high-traffic React applications. Focused on component modularity, performance metrics, and seamless state management.",
      details: ["Architecture design", "Code reviews", "Performance optimization"],
      icon: <Briefcase />
    },
    {
      title: "React Developer",
      company: "Previous Tech Firm",
      period: "2020 - 2022",
      description: "Built responsive dashboards and complex data visualization interfaces. Collaborated with designers to ensure pixel-perfect implementation.",
      details: ["Dashboard implementation", "API integration", "Animation systems"],
      icon: <Briefcase />
    },
    {
      title: "Learning Phase",
      company: "Early Journey",
      period: "2019 - 2020",
      description: "Mastered JavaScript fundamentals and dove into the React ecosystem. Built various open-source projects and experimental UI components.",
      details: ["ES6+ mastery", "Redux/Context", "Tailwind mastery"],
      icon: <GraduationCap />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center flex items-center justify-center gap-6">
          <div className="h-px w-12 md:w-24 bg-slate-800" />
          <span className="text-gradient">Career Journey</span>
          <div className="h-px w-12 md:w-24 bg-slate-800" />
        </h2>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-600 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 px-8 pt-2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass-effect p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                  <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <span className="p-2 bg-slate-900 rounded-lg text-cyan-400">
                      {exp.icon}
                    </span>
                    <span className="mono text-xs font-bold text-slate-500 tracking-widest">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.details.map((d, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-900 rounded-full border border-slate-700 text-slate-500 uppercase tracking-tighter">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
