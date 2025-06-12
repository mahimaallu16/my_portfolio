import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: 'B.Tech in Computer Science and Engineering (CIC)',
      company: 'Vasireddy Venkatadri Institute of Technology',
      period: 'Aug 2022 – Jul 2026',
      location: 'Guntur, India',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering (CIC) with a GPA of 9.106. Coursework includes Data Structures & Algorithms, Object-Oriented Programming System, Theory Of Computation, Database Management System, Operating System & Discrete Mathematics.',
      achievements: [
        'GPA: 9.106',
        'Highest rank in CIC branch',
        'Top Finalist in Smart India Hackathon (SIH)'
      ],
      technologies: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Discrete Mathematics'],
      type: 'Education',
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-blue-600 transform md:-translate-x-0.5"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-blue-600 rounded-full transform md:-translate-x-2 z-10 shadow-lg"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-xl">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="text-amber-400" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.title}
                        </h3>
                        <p className="text-amber-400 font-semibold">
                          {edu.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300">
                      {edu.type}
                    </span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-amber-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
