"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useDarkMode } from "@/contexts/DarkModeContext";
import IconBubbles from "./IconBubbles";
import TypingText from "./TypingText";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
function Landing() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-black"
      } w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row md:justify-between 
        pt-12 pl-4 pr-4
        lg:pt-12 lg:pl-20 lg:pr-12
        2xl:pt-24 2xl:pl-48 2xl:pr-36`}
    >
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="relative w-fit h-fit min-h-8">
          <div className={`z-10 font-semibold text-xl inline-block`}>
            <TypingText
              text="Xin chào! Tôi là Phan Công Châu"
              speed={100}
              style="font-bold text-xl"
            />
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-bold text-5xl md:text-7xl"
        >
          Frontend
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          Developer
        </motion.span>
        <div className="w-4/5 min-h-32 md:min-h-24">
          <TypingText
            text=" As an Information Technology student passionate about frontend
          development, I have experience with React.js,Tailwind CSS, and various
          frontend technologies. I am to become a Fullstack Developer."
            speed={10}
            style="w-3/4 mt-4"
          />
        </div>
        <motion.div
          data-cursor
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative w-fit h-fit md:mt-4"
        >
          <div
            className={`absolute inset-0 rounded-[16px] ${
              darkMode ? "bg-black" : "bg-white"
            } blur-sm`}
          ></div>
          <button
            className={`relative z-10 border rounded-[12px] font-semibold py-2 px-4  ${
              darkMode
                ? "border-gray-800 hover:border-gray-400"
                : "border-white hover:border-black"
            } hover:scale-110 hover:cursor-pointer duration-200 flex flex-row gap-2`}
          >
            <p>CV của tôi</p> <Download />
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative w-[717px] h-[347px] mt-12 hidden md:block"
      >
        <DotLottieReact
          src="/gifs/Technology.lottie"
          className="lg:w-full lg:h-full mb-14"
          loop
          autoplay
        />
        <IconBubbles />
      </motion.div>
      {/* Mobile */}
      <div className="w-full mt-12 flex flex-col gap-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row items-center"
        >
          <div className="relative w-fit h-fit mr-2">
            <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
            <span
              data-cursor
              className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[8px] font-semibold text-xl p-2 inline-block"
            >
              <Mail className="w-5 h-5 align-middle" />
            </span>
          </div>
          <span className="font-semibold mb-2">congchau206@gmail.com</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row items-center"
        >
          <div className="relative w-fit h-fit mr-2">
            <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
            <span
              data-cursor
              className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[8px] font-semibold text-xl p-2 inline-block"
            >
              <PhoneCall className="w-5 h-5 align-middle" />
            </span>
          </div>
          <span className="font-semibold mb-2">0703913350</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row items-center"
        >
          <div className="relative w-fit h-fit mr-2">
            <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
            <span
              data-cursor
              className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[8px] font-semibold text-xl p-2 inline-block"
            >
              <Github className="w-5 h-5 align-middle" />
            </span>
          </div>
          <span className="font-semibold mb-2">github.com/Cong-Chau</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row items-center"
        >
          <div className="relative w-fit h-fit mr-2">
            <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
            <span
              data-cursor
              className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[8px] font-semibold text-xl p-2 inline-block"
            >
              <Linkedin className="w-5 h-5 align-middle" />
            </span>
          </div>
          <span className="font-semibold mb-2">
            linkedin.com/in/phancongchau20062004/
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row  items-center"
        >
          <div className="relative w-fit h-fit mr-2">
            <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
            <span
              data-cursor
              className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[8px] font-semibold text-xl p-2 inline-block"
            >
              <MapPin className="w-5 h-5 align-middle" />
            </span>
          </div>
          <span className="font-semibold mb-2">TP Hồ Chí Minh</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
