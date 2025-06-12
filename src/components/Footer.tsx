
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            className="p-3 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Adinarayana Thota
            </h3>
            <p className="text-gray-400">
              AI/ML Engineer & Software Developer
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© 2024 Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>by Adinarayana Thota</span>
          </div>

          <p className="text-gray-500 text-sm mt-2">
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
