
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Gauge, LayoutGrid } from 'lucide-react';

export const Services: React.FC<{ isDarkMode: boolean }> = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building scalable, efficient, and interactive web applications using the latest React ecosystem tools and patterns.",
      icon: <Monitor className="w-10 h-10 text-cyan-400" />
    },
    {
      title: "UI Implementation",
      description: "Converting complex designs into functional components with pixel-perfect accuracy and smooth animation transitions.",
      icon: <LayoutGrid className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Responsive Design",
      description: "Ensuring your application looks and performs flawlessly across all devices, from desktops to tablets and mobile phones.",
      icon: <Smartphone className="w-10 h-10 text-green-400" />
    },
    {
      title: "Performance Tuning",
      description: "Optimizing load times, core web vitals, and execution performance for a seamless and snappy user experience.",
      icon: <Gauge className="w-10 h-10 text-yellow-400" />
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What I Bring to the Team</h2>
          <p className="text-slate-400">Combining technical expertise with a sharp eye for design to deliver top-tier frontend solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-1 rounded-3xl bg-gradient-to-br from-slate-800 to-transparent hover:from-cyan-500/20 transition-all duration-500"
            >
              <div className="glass-effect p-10 rounded-[calc(1.5rem-1px)] h-full border border-slate-800">
                <div className="mb-8 p-4 bg-slate-900/50 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-slate-900 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
