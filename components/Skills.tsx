
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Codepen, GitBranch, Zap, Cpu, Palette } from 'lucide-react';

export const Skills: React.FC<{ isDarkMode: boolean }> = () => {
  const skillGroups = [
    {
      title: "Frontend Core",
      icon: <Layout className="text-cyan-400" />,
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3"]
    },
    {
      title: "Styling & UI",
      icon: <Palette className="text-purple-400" />,
      skills: ["Tailwind CSS", "Styled Components", "Framer Motion", "Material UI"]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="text-green-400" />,
      skills: ["Git & GitHub", "Figma", "REST APIs", "Vite / Webpack"]
    },
    {
      title: "Optimization",
      icon: <Zap className="text-yellow-400" />,
      skills: ["Performance Audit", "Lazy Loading", "SEO", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Toolkit</h2>
          <p className="text-slate-400">Constantly evolving and learning new technologies to build better digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl border border-slate-800"
            >
              <div className="mb-6 p-3 bg-slate-900/50 rounded-xl w-fit">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 group">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-400 group-hover:text-slate-100 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="mono text-2xl font-bold uppercase">REACT</span>
          <span className="mono text-2xl font-bold uppercase">Jahia</span>
          <span className="mono text-2xl font-bold uppercase">AEM</span>
          <span className="mono text-2xl font-bold uppercase">NEXT.JS</span>
          <span className="mono text-2xl font-bold uppercase">Docker</span>
          <span className="mono text-2xl font-bold uppercase">TAILWIND</span>
        </div>
      </div>
    </section>
  );
};
