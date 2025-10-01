"use client";
import { Github, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen pt-12">
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 px-4 mb-8
        lg:py-12 lg:px-24
        2xl:pt-24 2xl:px-48"
      >
        {/* Left content */}
        <div className="w-full md:w-2/5 flex flex-col items-center lg:items-start gap-6">
          <p className="w-4/5 lg:w-full pb-3 text-center md:text-left font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Contact with me
          </p>
          <p className="hidden md:block text-white w-4/5 lg:w-full text-center md:text-left">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white flex flex-row items-center w-4/5 lg:w-full"
          >
            <div className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20">
              <Mail />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">congchau206@gmail.com</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white flex flex-row items-center w-4/5 lg:w-full"
          >
            <div className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20">
              <PhoneCall />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400">0703 913 350</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white flex flex-row items-center w-4/5 lg:w-full"
          >
            <div className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20">
              <MapPin />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Location</p>
              <p className="text-gray-400">Ho Chi Minh City</p>
            </div>
          </motion.div>

          {/* Social media */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white w-4/5 lg:w-full text-left"
          >
            Or connect with me on{" "}
            <span className="font-semibold text-blue-400">social media</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white flex flex-row items-center w-4/5 lg:w-full"
          >
            <a
              href="https://www.linkedin.com/in/phancongchau20062004/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20"
            >
              <Linkedin />
            </a>
            <div className="flex flex-col">
              <p className="font-semibold">Linkedin</p>
              <p className="text-gray-400">@phancongchau20062004</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-white flex flex-row items-center w-4/5 lg:w-full"
          >
            <a
              href="https://github.com/Cong-Chau"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target hover:cursor-pointer hover:scale-105 hover:bg-white/24 transition-transform w-12 h-12 flex justify-center items-center rounded-lg mr-2 bg-white/20"
            >
              <Github />
            </a>
            <div className="flex flex-col">
              <p className="font-semibold">Github</p>
              <p className="text-gray-400">Cong-Chau</p>
            </div>
          </motion.div>
        </div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: false, amount: 0.1 }}
          className="w-4/5 md:w-2/5 bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6"
        >
          <label className="flex flex-col gap-2 text-white">
            <span>Fullname</span>
            <input
              type="text"
              className="bg-white/10 border border-white/20 rounded-lg px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-white">
            <span>Email</span>
            <input
              type="email"
              className="bg-white/10 border border-white/20 rounded-lg px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-white">
            <span>Message</span>
            <textarea
              rows={4}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>
          <button className="cursor-target w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:cursor-pointer hover:bg-blue-400 transition">
            Send
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
