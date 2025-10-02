"use client";
import { Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

interface Project {
  title: string;
  completeTime: string;
  description: string;
  skills: string[];
  highlight: string;
  githubURL: string[];
}

function Projects() {
  const { t, lang } = useLanguage();

  const projects: Project[] = useMemo(() => {
    const data = t("projects.projects");
    return Array.isArray(data) ? (data as Project[]) : [];
  }, [lang, t]);

  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-start gap-4 text-white my-28 scroll-mt-20 min-h-screen"
    >
      <p className="w-full pb-3 text-center font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Projects
      </p>
      <p className="text-center w-4/5 md:w-2/5 text-white">
        Discover my journey through projects, with each one marking a step
        forward in my growth and learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto mt-6">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={5000}
            scale={1}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
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
              key={index}
              className="h-full text-center bg-white/12 hover:bg-white/8 
                    rounded-[8px] p-6 backdrop-blur-[4px] 
                    flex flex-col items-center justify-between"
            >
              <div className="w-full">
                <h1 className="w-full text-left font-bold text-blue-500 text-xl">
                  {project.title}
                </h1>
                <p className="w-full text-left font-semibold">
                  {project.completeTime}
                </p>
                <div className="border border-b border-gray-500 my-3"></div>
                <p className="w-full text-left text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="cursor-target hover:cursor-pointer hover:bg-blue-400/24 transition-transform
                            flex justify-center items-center rounded-full border border-accent/20 text-white py-1 px-3"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="border border-b border-gray-500 my-3"></div>
                <p className="w-full text-left text-gray-300">
                  {project.highlight}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.githubURL.map((url, urlIndex) => (
                    <a
                      key={urlIndex}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
                            bg-accent/10 text-accent border border-accent/20 rounded-lg 
                            hover:scale-105 hover:bg-white hover:text-black
                            transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      {project.githubURL.length > 1
                        ? urlIndex === 0
                          ? "Client Repo"
                          : "Server Repo"
                        : "GitHub"}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
