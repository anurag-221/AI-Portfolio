
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC<{ isDarkMode: boolean }> = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const { name, email, message } = formState;
  const mailtoLink = `mailto:anuragsrivastava695@gmail.com?subject=${encodeURIComponent(
    'Portfolio Message from ' + name
  )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
  window.location.href = mailtoLink;
};

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Let's build something <span className="text-gradient">great</span>{" "}
              together.
            </h2>
            <p className="text-slate-400 mb-12">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mono">
                    Email me
                  </p>
                  <p className="text-lg font-medium">
                    anuragsrivastava695@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-800 rounded-2xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mono">
                    Location
                  </p>
                  <p className="text-lg font-medium">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {[
                { Icon: Github, url: "https://github.com/anurag-221" },
                {
                  Icon: Linkedin,
                  url: "https://www.linkedin.com/in/anurag-srivastava-b16b0b159/",
                },
                {
                  Icon: Twitter,
                  url: "#",
                },
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-effect p-8 md:p-12 rounded-3xl border border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium mono text-slate-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full px-6 py-4 bg-slate-900/50 rounded-xl border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium mono text-slate-400 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className="w-full px-6 py-4 bg-slate-900/50 rounded-xl border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium mono text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-slate-900/50 rounded-xl border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none text-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSent}
                type="submit"
                className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  isSent
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/20"
                }`}
              >
                {isSent ? (
                  "Message Received!"
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
