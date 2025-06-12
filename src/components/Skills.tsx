import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Terminal, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Java', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'C', level: 80, color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      category: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'HTML', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'React.js', level: 75, color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'SQL', level: 80, color: 'from-indigo-400 to-indigo-600' }
      ]
    },
    {
      category: 'Developer Tools',
      icon: Terminal,
      skills: [
        { name: 'Git', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'GitHub', level: 75, color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      category: 'Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 70, color: 'from-orange-400 to-orange-600' },
        { name: 'Google Cloud', level: 70, color: 'from-blue-400 to-blue-600' }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-emerald-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-purple-500/10 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-300 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-400 mx-auto mt-8 rounded-full opacity-60"></div>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skills.map((category) => (
            <motion.button
              key={category.category}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.category)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
                selectedCategory === category.category
                  ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-gray-300 border-slate-700 hover:text-emerald-300 hover:border-emerald-500/30 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon size={20} />
                <span>{category.category}</span>
              </div>
              {selectedCategory === category.category && (
                <motion.div
                  layoutId="categoryIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills
            .find(cat => cat.category === selectedCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
                  {/* Skill Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <motion.span
                      className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{
                        scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{ x: [-100, 200] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  {/* Skill Details */}
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-700"
                      >
                        <p className="text-gray-300 text-sm">
                          {skill.name === 'Python' && 'Advanced Python programming with focus on AI/ML and data analysis'}
                          {skill.name === 'Java' && 'Core Java programming with emphasis on OOP principles and enterprise applications'}
                          {skill.name === 'JavaScript' && 'Modern JavaScript development with React.js and frontend frameworks'}
                          {skill.name === 'C' && 'System programming and low-level development with C language'}
                          {skill.name === 'HTML' && 'Semantic HTML5 markup and modern web standards'}
                          {skill.name === 'CSS' && 'Advanced CSS3 styling with responsive design and animations'}
                          {skill.name === 'React.js' && 'Component-based UI development with React.js and modern hooks'}
                          {skill.name === 'SQL' && 'Database design and optimization with SQL'}
                          {skill.name === 'Git' && 'Version control and collaborative development with Git'}
                          {skill.name === 'GitHub' && 'Project management and code collaboration on GitHub'}
                          {skill.name === 'AWS' && 'Cloud infrastructure and services on Amazon Web Services'}
                          {skill.name === 'Google Cloud' && 'Cloud computing and AI services on Google Cloud Platform'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
