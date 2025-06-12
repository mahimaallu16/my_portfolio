import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Linkedin, Mail, Download, ExternalLink, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const typedRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Fresher',
        'Software Developer',
        'Tech Innovator',
        'Problem Solver',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl mx-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors"
              >
                Close
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="public\images\video_20250429_115144.mp4"
                  title="Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-emerald-900/20 to-slate-900/40"></div>
        
        {/* Floating Orbs - Reduced for mobile */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-500/20 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Particle System - Reduced for mobile */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* Enhanced Avatar with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
          >
            <img 
              src="public\images\mahima.jpg" 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          {/* Enhanced Main Text with Stagger Animation */}
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight px-4"
            >
              ALLU MAHIMA
            </motion.h1>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 md:mb-8 font-light px-4"
            >
              I'm a{' '}
              <span className="relative">
                <span ref={typedRef} className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent font-semibold"></span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="text-emerald-400 w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons with Video Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-xl md:rounded-2xl font-semibold overflow-hidden shadow-xl text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="group w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-emerald-600 text-white rounded-xl md:rounded-2xl font-semibold hover:from-purple-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
            >
              <Play size={18} className="md:w-5 md:h-5" />
              Watch Intro
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1cdVEjbnW04fuk4XpvDi8Hunmg3F-Tdsd/view?usp=sharing', '_blank')}
              className="group w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 border-2 border-emerald-400 text-emerald-400 rounded-xl md:rounded-2xl font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 relative overflow-hidden text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-emerald-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Download size={18} className="md:w-5 md:h-5" />
                Download Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 md:gap-6 justify-center pt-8 md:pt-12 px-4"
          >
            {[
              { icon: Github, href: 'https://github.com/mahimaallu', label: 'GitHub', color: 'hover:bg-purple-500/20' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mahima-allu', label: 'LinkedIn', color: 'hover:bg-emerald-500/20' },
              { icon: Mail, href: 'mailto:mahimaallu16@gmail.com', label: 'Email', color: 'hover:bg-purple-500/20' },
              { icon: ExternalLink, href: '#', label: 'Portfolio', color: 'hover:bg-emerald-500/20' },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`p-3 md:p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl text-gray-400 hover:text-white ${color} transition-all duration-300 border border-slate-700/50 hover:border-emerald-400/50`}
              >
                <Icon size={20} className="md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-10 md:w-6 md:h-12 border-2 border-emerald-400/60 rounded-full flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 md:h-3 bg-gradient-to-b from-emerald-400 to-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
