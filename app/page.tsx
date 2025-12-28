
'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar.tsx';
import { Hero } from '../components/Hero.tsx';
import { About } from '../components/About.tsx';
import { Skills } from '../components/Skills.tsx';
import { Projects } from '../components/Projects.tsx';
import { Experience } from '../components/Experience.tsx';
import { Services } from '../components/Services.tsx';
import { Contact } from '../components/Contact.tsx';
import { Footer } from '../components/Footer.tsx';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen selection:bg-cyan-500/30`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
