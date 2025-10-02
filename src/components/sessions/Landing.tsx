"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TextType from "../cards/TextType";
import Shuffle from "../cards/Shuffle";
import { useLanguage } from "@/context/LanguageContext";
import { sendMail } from "@/utils/sendMail";
import { callPhone } from "@/utils/callPhone";
import { openLink } from "@/utils/openLink";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

interface Bubble {
  icon: React.ReactNode;
  text: string;
  action?: () => void;
}

const bubbles: Bubble[] = [
  {
    icon: <Mail />,
    text: "Email: congchau206@gmail.com",
    action: () => sendMail("congchau206@gmail.com"),
  },
  {
    icon: <PhoneCall />,
    text: "Phone: 0703913350",
    action: () => callPhone("0703913350"),
  },
  {
    icon: <Github />,
    text: "Github: @Cong-Chau",
    action: () => openLink("https://github.com/Cong-Chau"),
  },
  {
    icon: <Linkedin />,
    text: "LinkedIn: @phancongchau20062004",
    action: () => openLink("https://www.linkedin.com/in/phancongchau20062004/"),
  },
  {
    icon: <MapPin />,
    text: "Location: TP Hồ Chí Minh",
    action: () => openLink("https://www.google.com/maps?q=Thu+Duc+Ho+Chi+Minh"),
  },
];

function Landing() {
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { t, lang, setLang } = useLanguage();

  const landingTitle = useMemo(() => [t("landing.title")], [t, lang]);
  const landingSummary = useMemo(() => [t("landing.sumary")], [t, lang]);

  const handleDownload = () => {
    window.open(
      "https://www.dropbox.com/scl/fi/3zof4znywfg8h21207sat/PhanCongChau_CV_FE_Intern.pdf?rlkey=t6w7w101ey6w70w6qqdu2cbqv&st=sbg69n1g&dl=1",
      "_blank"
    );
  };

  return (
    <div
      id="home"
      className={`text-white w-full flex flex-col md:flex-row md:justify-between scroll-mt-20 pb-12
        pt-12 pl-4 pr-4
        lg:pt-12 lg:pl-20 lg:pr-12
        2xl:pt-24 2xl:pl-48 2xl:pr-36`}
    >
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="relative w-fit h-fit min-h-8">
          <div className={`z-10 font-semibold text-xl inline-block `}>
            <TextType
              text={landingTitle}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="font-bold text-5xl md:text-7xl"
        >
          Frontend
        </motion.span>
        <Shuffle
          text="Developer"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
        <div className="w-4/5 min-h-32 md:min-h-24">
          <TextType
            text={landingSummary}
            typingSpeed={1}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className=" relative w-auto h-auto md:mt-4 "
        >
          <button
            onClick={handleDownload}
            className={`cursor-target relative z-10 border rounded-[12px] font-semibold py-2 px-4 border-white text-white hover:bg-white hover:text-black
                        hover:cursor-pointer duration-200 flex flex-row gap-2`}
          >
            <p>{t("landing.CV")}</p> <Download />
          </button>
        </motion.div>
        {/* Icon */}
        <div className="hidden md:flex flex-row w-full min-h-10 justify-start gap-6 mt-8">
          {bubbles.map((bubble, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: false, amount: 0.5 }}
              onMouseEnter={(e) => {
                setHoverText(bubble.text);
              }}
              onMouseLeave={() => setHoverText(null)}
              onMouseMove={(e) => {
                setCursorPos({ x: e.clientX, y: e.clientY });
              }}
              onClick={bubble.action}
              className={`cursor-target hover:cursor-pointer hover:scale-110 hover:bg-white/24 transition-transform w-10 h-10 
                flex justify-center items-center rounded-[8px] bg-white/20 text-white`}
            >
              {bubble.icon}
            </motion.div>
          ))}
        </div>
        {/* Con trỏ text hover */}
        {hoverText && (
          <div
            className="fixed pointer-events-none bg-white text-black text-sm px-2 py-1 rounded shadow-lg z-50"
            style={{
              left: cursorPos.x + 15,
              top: cursorPos.y + 15,
            }}
          >
            {hoverText}
          </div>
        )}
      </div>
      <div className="relative w-[717px] h-[347px] mt-12 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <DotLottieReact
            src="/gifs/Technology.lottie"
            className="lg:w-full lg:h-full mb-14"
            loop
            autoplay
          />
        </motion.div>
      </div>
      {/* Mobile */}
      {/* Mobile */}
      <div className="w-full mt-12 flex flex-col gap-4 md:hidden">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.15 + index * 0.05,
            }}
            viewport={{ once: false, amount: 0.5 }}
            onClick={bubble.action}
            className="flex flex-row items-center cursor-pointer"
          >
            <div
              className="hover:cursor-pointer hover:scale-110 hover:bg-white/24 
                    transition-transform w-10 h-10 flex justify-center items-center 
                    rounded-[8px] mr-2 bg-white/20 text-white"
            >
              {bubble.icon}
            </div>
            <span className="font-semibold mb-2 pt-2">{bubble.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
