"use client";
import { useMemo } from "react";
import CVPreview from "../cards/CVPreview";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "@/context/LanguageContext";

function About() {
  const { t, lang } = useLanguage();

  // đảm bảo lấy lại text khi lang thay đổi
  const aboutMes: string[] = useMemo(() => {
    const result = t("about.aboutMes");
    return Array.isArray(result) ? result : [result];
  }, [lang, t]);

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-start gap-6 text-white mb-12 scroll-mt-20 
             px-6 sm:px-8 md:px-12 lg:px-4"
    >
      {/* Header */}
      <p
        className="w-full text-center font-bold pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
      >
        {t("about.header")}
      </p>
      <p className="text-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-white text-sm sm:text-base md:text-lg">
        {t("about.title")}
      </p>

      {/* Content */}
      <div
        className="flex flex-col md:flex-row items-center justify-center md:items-start 
                  w-full max-w-6xl gap-10 mt-8"
      >
        {/* Left (Avatar + text) */}
        <div
          className="flex flex-col items-center text-center md:text-left md:items-start gap-6 
                    w-full md:w-1/2"
        >
          {/* Avatar */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-white blur-sm"></div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="relative w-full h-full object-cover rounded-full shadow-lg"
              src="/images/avatar.jpg"
              alt="About Me"
            />
          </div>

          {/* About text */}
          <div className="text-sm sm:text-base md:text-lg leading-relaxed">
            {aboutMes.map((line, i) => (
              <p key={i} className="mb-3">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Right (CV Preview) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={2000}
            scale={1}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <CVPreview />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default About;
