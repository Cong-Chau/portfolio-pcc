"use client";
import { Github, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend developer passionate about creating innovative web
              solutions and bringing ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-white"
              >
                <a
                  href="https://github.com/Cong-Chau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20"
                >
                  <Github />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-white"
              >
                <a
                  href="https://www.linkedin.com/in/phancongchau20062004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20"
                >
                  <Linkedin />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-white"
              >
                <div className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20">
                  <Mail />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed and Developed by Phan Cong Chau
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
