import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, Code, ExternalLink } from 'lucide-react';

const Hackathon = () => {
  const hackathonProject = {
    title: 'Automatic Billing Cart System IOT',
    description: 'Developed an embedded IoT-based project to streamline billing processes in retail stores and supermarkets. The system uses an Arduino UNO, LCD Display with I2C, and EM18 RFID module to automatically identify products through RFID tags. Each product\'s details (name, quantity, and price) are displayed on the LCD, and the total bill is calculated automatically at checkout, making the shopping experience seamless and efficient.',
    image: 'phttps://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16b1b879-e124-4fef-bdb2-2965da290a18_1080x720.jpeg',
    tags: ['Arduino', 'IoT', 'RFID', 'Embedded Systems', 'C++', 'I2C', 'LCD Display'],

    achievements: [
      'Real-time product identification using RFID technology',
      'Automatic bill calculation and display on LCD',
      'Seamless integration of hardware components',
      'Efficient checkout process for retail environments'
    ],
    technicalDetails: [
      'Arduino UNO microcontroller for system control',
      'EM18 RFID module for product identification',
      'LCD Display with I2C interface for real-time information',
      'Custom C++ code for system logic and calculations'
    ]
  };

  return (
    <section id="hackathon" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathon Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions developed during hackathons
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-amber-500/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Image */}
            <div className="relative h-full min-h-[400px]">
              <img
                src={hackathonProject.image}
                alt={hackathonProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>
              
              {/* Hackathon Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-blue-600 text-white text-sm font-semibold rounded-full flex items-center gap-2">
                  <Award size={16} />
                  Hackathon Project
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-amber-400" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  {hackathonProject.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {hackathonProject.description}
              </p>

              {/* Technical Details */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technical Implementation</h4>
                <ul className="space-y-2">
                  {hackathonProject.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {hackathonProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.a
                  
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors duration-300"
                >
                  <Code size={16} />
                  View Code
                </motion.a>
                <motion.a
                  
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-blue-600 text-white rounded-xl hover:from-amber-600 hover:to-blue-700 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathon; 
