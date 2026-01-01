
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

export const Projects: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const projects = [
  {
    title: "Kumbh Mela Website",
    category: "Event & Community Platform",
    image: "/images/kumbh-mela.png",
    tech: ["React", "Express", "Firebase", "Cloudinary", "Slick Slider", "Tailwind CSS"],
    features: [
      "Scared bath slider with countdown timers for key events",
      "Create post feature: users can share stories with images",
      "Bookmark stories to revisit later",
      "Gallery to view all uploaded images",
      "Like functionality for images and posts"
    ],
    role: "Lead Frontend Developer & UI/UX Implementation",
    link: "#",
    github: "#"
  },
  {
    title: "Sangam Mart App",
    category: "E-commerce Platform",
    image: "/images/sangam-mart.png",
    tech: ["React", "Firebase", "Cloudinary", "Tailwind CSS"],
    features: [
      "Product categories and trending product sections",
      "Cart functionality with real-time updates",
      "Login and signup authentication",
      "Responsive and modern UI"
    ],
    role: "Full Frontend Development & E-commerce Integration",
    link: "#",
    github: "#"
  },
  {
    title: "Algolia Website Migration",
    category: "Corporate Project",
    image: "/images/algolia.jpg",
    tech: ["Jahia CMS", "HTML", "CSS"],
    features: [
      "Migrated legacy website to Jahia CMS",
      "Developed reusable components in Jahia",
      "Front-end implementation with HTML & CSS",
      "Team-based development and collaboration"
    ],
    role: "Jahia Developer & Frontend Integration",
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
          <a href="#projects" className="text-cyan-400 hover:underline flex items-center gap-2 mb-2 transition-all">
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
                  <span key={i} className={`text-[10px] uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-100'} bg-slate-800/50 px-2 py-1 rounded`}>
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
