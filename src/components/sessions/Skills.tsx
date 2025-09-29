"use client";

import Tilt from "react-parallax-tilt";

const techs = [
  { title: "HTML5", iconURL: "/svgs/html5.svg" },
  { title: "CSS3", iconURL: "/svgs/css3.svg" },
  { title: "JavaScript", iconURL: "/svgs/javascript.svg" },
  { title: "React JS", iconURL: "/svgs/react.svg" },
  { title: "Tailwind CSS", iconURL: "/svgs/tailwindcss.svg" },
  { title: "Node JS", iconURL: "/svgs/nodejs.svg" },
];

const tools = [
  { title: "Github", iconURL: "/svgs/github.svg" },
  { title: "MySQL", iconURL: "/svgs/mysql.svg" },
  { title: "Postman", iconURL: "/svgs/postman.svg" },
];

function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center justify-start gap-4 text-white my-28 scroll-mt-20 min-h-screen"
    >
      <p className="w-full text-center font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Skills
      </p>
      <p className={`text-center w-4/5 md:w-2/5 text-white`}>
        Explore my journey through technical expertise. Each section represents
        a milestone in my continuous learning path.
      </p>
      <div className="w-1/2">
        <p className="text-center bg-white/12 rounded-[8px] px-4 py-2 backdrop-blur-sm font-semibold mt-4 w-full mx-auto">
          Công nghệ
        </p>
        {/* Công nghệ */}
        <div className="grid grid-cols-3 gap-8 w-full mx-auto mt-6">
          {techs.map((tech, index) => (
            <Tilt
              tiltMaxAngleX={15} // góc nghiêng tối đa theo trục X
              tiltMaxAngleY={15} // góc nghiêng tối đa theo trục Y
              perspective={1000} // chiều sâu 3D
              scale={1.05} // phóng to nhẹ khi hover
              transitionSpeed={1000} // tốc độ animation (ms)
              gyroscope={true} // cho phép xoay theo cảm biến gyroscope trên mobile
            >
              <div
                key={index}
                className="cursor-target text-center bg-white/12 hover:bg-white/8 rounded-[8px] p-4 backdrop-blur-[4px] flex flex-col items-center"
              >
                <img
                  src={tech.iconURL}
                  alt={tech.title}
                  className="w-1/2 h-auto"
                />
                <p className="mt-2">{tech.title}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
      {/* Công cụ */}
      <div className="w-1/2">
        <p className="text-center bg-white/12 rounded-[8px] px-4 py-2 backdrop-blur-sm font-semibold mt-4 w-full mx-auto">
          Công cụ
        </p>
        {/* Nội dung */}
        <div className="grid grid-cols-3 gap-8 w-full mx-auto mt-6">
          {tools.map((tool, index) => (
            <Tilt
              tiltMaxAngleX={15} // góc nghiêng tối đa theo trục X
              tiltMaxAngleY={15} // góc nghiêng tối đa theo trục Y
              perspective={1000} // chiều sâu 3D
              scale={1.05} // phóng to nhẹ khi hover
              transitionSpeed={1000} // tốc độ animation (ms)
              gyroscope={true} // cho phép xoay theo cảm biến gyroscope trên mobile
            >
              <div
                key={index}
                className="cursor-target text-center bg-white/12 hover:bg-white/8 rounded-[8px] p-4 backdrop-blur-[4px] flex flex-col items-center"
              >
                <img
                  src={tool.iconURL}
                  alt={tool.title}
                  className="w-1/2 h-auto"
                />
                <p className="mt-2">{tool.title}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
