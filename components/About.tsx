
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className={`absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse`} />
            <div className={`relative rounded-3xl overflow-hidden glass-effect border p-2`}>
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Workspace" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-4 rounded-xl border-t border-white/10">
                <p className="text-sm text-cyan-400">Status: Currently building cool things</p>
                <p className="text-xs text-slate-500 mt-1">Delhi, India • Remote Available</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="text-cyan-400">01.</span> About Me
              <div className="h-px flex-1 bg-slate-800" />
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a <span className={`${isDarkMode ? 'text-slate-100' :'text-slate-800' } font-medium`}>frontend developer with 4+ years of experience</span> building responsive, high-performance web applications.
              </p>
              <p>
                I specialize in <span className="text-cyan-400 font-mono">React, Tailwind CSS, and modern JavaScript</span>, with a strong focus on clean UI, smooth animations, and maintainable code.
              </p>
              <p>
                I also integrate content management systems (CMS) like <span className="text-slate-100 font-medium">Jahia, AEM or Strapi,</span> allowing websites to be easily scalable and content to be updated dynamically without touching the code.
              </p>
              <p>
                My passion lies in bridging the gap between design and technology. I enjoy solving complex UI challenges, optimizing performance, and translating designs into pixel-perfect, interactive interfaces.
              </p>
              <p className={`mono text-sm ${isDarkMode ? 'bg-slate-800/50' :'bg-slate-200/50' } p-4 rounded-lg border border-slate-700`}>
                const passions = ["UI Engineering", "Performance Optimization", "Clean Architecture"];
                <br />
                const strengths = ["Debugging", "User Experience", "Fast Learning"];
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
