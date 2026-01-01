
'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene.tsx';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <Suspense fallback={<div className="w-full h-full bg-slate-900" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Scene isDarkMode={isDarkMode} />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(${isDarkMode ? 'white' : 'black'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10 text-center py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className=" text-cyan-400 text-sm md:text-base mb-4 tracking-widest font-medium uppercase">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">
            Anurag Srivastava
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 text-slate-400 text-lg md:text-2xl font-light mb-10"
          >
            <span className="text-gradient font-semibold">Frontend Developer</span>
            <span>•</span>
            <span className="text-gradient font-semibold">React Specialist</span>
            <span>•</span>
            <span className="text-gradient font-semibold">CMS Developer</span>
          </motion.div>

          <p className="max-w-2xl mx-auto text-slate-400 md:text-lg mb-12 leading-relaxed">
            I build modern, fast, and user-friendly web interfaces with React and modern frontend tools. 
            Focused on pixel-perfection and performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full sm:w-auto px-10 py-4 border-2 border-slate-700 hover:border-cyan-400 ${isDarkMode ?'text-slate-100': 'text-slate-900' } font-bold rounded-full transition-all glass-effect`}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hidden md:block"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
