
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-bold mono mb-4">
              <span className="text-cyan-400">&lt;</span>
              Anurag
              <span className="text-cyan-400">/&gt;</span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm">
              Designing and developing beautiful, high-performance web experiences with modern frontend technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-slate-500 mb-2">© 2025 Anurag Srivastava. All rights reserved.</p>
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              Built with React, Tailwind & <Heart size={12} className="text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
