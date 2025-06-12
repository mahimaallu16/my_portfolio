import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next AI/ML project or full-stack application? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about creating innovative AI/ML solutions and scalable web applications. 
                Whether you need a fraud detection system, intelligent chatbot, or full-stack application, 
                I'm here to help transform your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'mahimaallu16@gmail.com', href: 'mailto:mahimaallu16@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 9032828566', href: 'tel:+919032828566' },
                { icon: MapPin, label: 'Location', value: 'Andhra Pradesh, India', href: '#' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full text-white group-hover:shadow-lg transition-all duration-300">
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <a
                      href={contact.href}
                      className="text-white font-semibold hover:text-amber-400 transition-colors duration-300"
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: Github, href: 'https://github.com/mahimaallu', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/mahima-allu', label: 'LinkedIn' },
                { icon: ExternalLink, href: '#', label: 'Portfolio' },
                { icon: Mail, href: 'mailto:mahimaallu16@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-blue-600 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="pt-6 border-t border-slate-700">
              <h4 className="text-white font-semibold mb-4">Coding Profiles</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'LeetCode', href: '#' },
                  { name: 'GeeksforGeeks', href: '#' },
                  { name: 'HackerRank', href: '#' },
                  { name: 'Articles', href: '#' },
                ].map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-all duration-300"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-all duration-300"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-all duration-300"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-amber-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-amber-600 hover:to-blue-700 transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
