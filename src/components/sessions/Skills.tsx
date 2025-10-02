"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const techs = [
  { title: "HTML5", iconClass: "devicon-html5-plain colored" },
  { title: "CSS3", iconClass: "devicon-css3-plain colored" },
  { title: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { title: "React JS", iconClass: "devicon-react-original colored" },
  { title: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
  { title: "Node JS", iconClass: "devicon-nodejs-plain colored" },
];

const tools = [
  { title: "Github", iconClass: "devicon-github-original" },
  { title: "MySQL", iconClass: "devicon-mysql-original colored" },
  { title: "Postman", iconClass: "devicon-postman-plain colored" },
];

function Skills() {
  const { t, lang } = useLanguage();

  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center justify-start gap-4 text-white my-28 scroll-mt-20 "
    >
      <p className="w-full text-center pb-4 font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        {t("skills.header")}
      </p>
      <p className="text-center w-4/5 md:w-2/5 text-white">
        {t("skills.title")}
      </p>

      {/* Công nghệ */}
      <div className="w-2/3 md:w-1/2">
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center bg-white/12 rounded-[8px] px-4 py-2 backdrop-blur-sm font-semibold mt-4 w-full mx-auto"
        >
          {t("skills.techs")}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto mt-6">
          {techs.map((tech, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: false, amount: 0.1 }}
                className="cursor-target text-center bg-white/12 hover:bg-white/8 rounded-[8px] p-4 backdrop-blur-[4px] flex flex-col items-center"
              >
                <div className="w-1/2 flex justify-center">
                  <i
                    className={`${tech.iconClass} text-5xl md:text-[64px]`}
                  ></i>
                </div>
                <p className="mt-2">{tech.title}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Công cụ */}
      <div className="w-2/3 md:w-1/2">
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center bg-white/12 rounded-[8px] px-4 py-2 backdrop-blur-sm font-semibold mt-4 w-full mx-auto"
        >
          {t("skills.tools")}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto mt-6">
          {tools.map((tool, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="cursor-target text-center bg-white/12 hover:bg-white/8 rounded-[8px] p-4 backdrop-blur-[4px] flex flex-col items-center"
              >
                <div className="w-1/2 flex justify-center">
                  <i
                    className={`${tool.iconClass} text-5xl md:text-[64px]`}
                  ></i>
                </div>
                <p className="mt-2">{tool.title}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
