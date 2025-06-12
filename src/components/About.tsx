import React from 'react';
import { motion } from 'framer-motion';
import { User, Download, Star, Award, Code, Brain, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-[500px] h-[500px] rounded-3xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-purple-500 to-emerald-400 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://substackcdn.com/image/fetch/w_168,h_168,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F275ebbbb-9581-426a-94f8-763aca6250a6_749x749.jpeg" 
                    alt="Profile" 
                    className="text-gray-400 z-10 object-cover w-full h-full" 
                  />
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-2xl border border-emerald-400/30"
            >
              <Brain className="text-white" size={28} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 shadow-2xl border border-purple-400/30"
            >
              <Code className="text-white" size={28} />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-2xl p-3 shadow-2xl"
            >
              <Zap className="text-white" size={24} />
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Software Developer-fresher
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science and Engineering (CIC) 
                at Vasireddy Venkatadri Institute of Technology with an impressive GPA of 9.106. I specialize in building 
                intelligent systems and innovative applications using cutting-edge technologies.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With expertise in Python, Java, and JavaScript, I've developed projects like an AI-driven interview platform 
                and a gesture-driven calculator using Google Gemini. My focus areas include AI/ML, computer vision, and 
                full-stack development, combining technical skills with creative problem-solving.
              </motion.p>
            </div>

            {/* Enhanced Achievements */}
            <div className="space-y-4 pt-6">
              {[
                { icon: Award, text: "Highest rank in CIC branch with GPA 9.106", color: "from-emerald-500 to-emerald-600" },
                { icon: Target, text: "Top Finalist in Smart India Hackathon (SIH)", color: "from-purple-500 to-purple-600" }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg`}>
                    <achievement.icon className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 font-medium">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '2+', label: 'Projects Completed', color: 'from-emerald-400 to-emerald-500' },
                { number: '9.106', label: 'GPA', color: 'from-purple-400 to-purple-500' },
                { number: '4+', label: 'Skills', color: 'from-emerald-400 to-purple-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1cdVEjbnW04fuk4XpvDi8Hunmg3F-Tdsd/view?usp=sharing', '_blank')}
              viewport={{ once: true }}
              className="group flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-2xl font-semibold shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
