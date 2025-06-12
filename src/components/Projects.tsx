import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Bot, Shield, Image, CloudSun, Cpu, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SkyView — Real-Time Weather Web App',
      description: 'A modern and interactive weather web application built with React, designed to deliver real-time weather data and an immersive user experience. Features include live weather updates, auto-location detection, city search, time-based backgrounds, 4-day forecast, and detailed weather statistics using the OpenWeather API.',
      image: 'public/images/Screenshot 2025-06-11 193628.png',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'OpenWeather API', 'Geolocation', 'Responsive Design'],
      github: '#',
      live: '#',
      featured: true,
      icon: Cloud,
      achievements: [
        'Real-time weather data with OpenWeather API integration',
        'Time-based dynamic backgrounds and responsive UI',
        '4-day weather forecast with detailed statistics',
        'Auto-location detection and city search functionality'
      ]
    },
    {
      title: 'Automatic Billing Cart System IOT',
      description: 'Developed an embedded IoT-based project to streamline billing processes in retail stores and supermarkets. The system uses an Arduino UNO, LCD Display with I2C, and EM18 RFID module to automatically identify products through RFID tags. Each product\'s details (name, quantity, and price) are displayed on the LCD, and the total bill is calculated automatically at checkout, making the shopping experience seamless and efficient.',
      image: 'public/images/WhatsApp Image 2025-06-11 at 18.35.26_c882f160.jpg',
      tags: ['Arduino', 'IoT', 'RFID', 'Embedded Systems', 'C++', 'I2C', 'LCD Display'],
      featured: true,
      icon: Cpu,
      achievements: [
        'Real-time product identification using RFID technology',
        'Automatic bill calculation and display on LCD',
        'Seamless integration of hardware components',
        'Efficient checkout process for retail environments'
      ]
    },
    
    {
      title: 'Gesture-Driven AI Calculator',
      description: 'Developed an AI-powered calculator that solves hand-drawn math problems using real-time webcam input and gesture recognition. Used MediaPipe to track finger gestures for drawing, erasing, resetting, and submitting expressions on a virtual canvas. Integrated Google Gemini to generate accurate, step-by-step solutions from the drawn input and displayed results using a Streamlit interface.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230921120127/Volume-Controller.png',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit', 'Pillow', 'Numpy', 'Google Gemini AI'],
      github: '#',
      live: '#',
      featured: true,
      icon: CloudSun,
      achievements: [
        'Real-time hand gesture recognition with MediaPipe',
        'Step-by-step solution generation using Google Gemini',
        'Interactive virtual canvas for mathematical expressions',
        'User-friendly Streamlit interface for result display'
      ]
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Explore my recent projects showcasing AI/ML, full-stack development, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-amber-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-slate-900/80 rounded-full">
                    <project.icon className="text-amber-400" size={20} />
                  </div>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-amber-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                          <span className="text-amber-400 mt-0.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors duration-300 text-sm"
                  >
                    <Code size={14} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500 to-blue-600 text-white rounded-xl hover:from-amber-600 hover:to-blue-700 transition-all duration-300 text-sm"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-amber-600 hover:to-blue-700 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
