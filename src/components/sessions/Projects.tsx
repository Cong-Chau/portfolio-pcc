"use client";
import { Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hệ thống quản lý nhà hàng",
    completeTime: "11/2024 - 12/2024",
    description:
      "Ứng dụng quản lý nhà hàng với đặt món, đặt bàn, quản lý thực đơn và thống kê doanh thu. Dự án nhóm 5 người thực hiện theo mô hình MVC.",
    skills: ["Handlebars", "Express.js", "Node.js", "MySQL"],
    highlight:
      "Tích hợp xác thực người dùng, phân quyền quản lý/nhân viên, báo cáo doanh thu trực quan.",
    githubURL: ["https://github.com/Cong-Chau/Restaurant"],
  },
  {
    title: "Nền tảng tạo video bằng AI",
    completeTime: "05/2025 - 07/2025",
    description:
      "Nền tảng web cho phép tạo video ngắn tự động từ văn bản, tích hợp Text-to-Speech, chuyển ảnh thành video và sinh phụ đề tự động.",
    skills: ["React", "Tailwind CSS", "Python", "MongoDB"],
    highlight:
      "Kết hợp frontend React + Tailwind với backend Python xử lý AI, đơn giản hóa quy trình tạo video.",
    githubURL: ["https://github.com/Cong-Chau/GenerateVideo/tree/main-chau"],
  },
  {
    title: "ACCI Exam Management System",
    completeTime: "03/2025 - Now",
    description:
      "Hệ thống quản lý thi chứng chỉ Anh ngữ & Tin học ACCI, hỗ trợ đăng ký, thanh toán, gia hạn, phát hành phiếu dự thi và cấp chứng chỉ.",
    skills: [
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MySQL",
    ],
    highlight:
      "Triển khai FE/BE tách biệt, mô hình hóa đầy đủ quy trình nghiệp vụ từ đăng ký đến cấp chứng chỉ.",
    githubURL: [
      "https://github.com/Cong-Chau/ACCI-Client",
      "https://github.com/Cong-Chau/ACCI-Server",
    ],
  },
  {
    title: "Hệ thống quản lý đại lý",
    completeTime: "11/2024 - 12/2024",
    description:
      "Ứng dụng quản lý hàng hóa, nhập - xuất và báo cáo doanh thu. Dự án nhóm 4 người phát triển theo mô hình MVC.",
    skills: ["Handlebars", "Express.js", "Node.js", "MySQL"],
    highlight:
      "Thống kê doanh thu trực quan, hỗ trợ quản lý nắm bắt hiệu quả kinh doanh nhanh chóng.",
    githubURL: ["https://github.com/Cong-Chau/AgentManager"],
  },
  {
    title: "Remote Desktop",
    completeTime: "11/2024 - 12/2024",
    description:
      "Ứng dụng điều khiển máy tính từ xa trong LAN theo mô hình client-server, truyền hình ảnh màn hình, điều khiển chuột và bàn phím.",
    skills: ["C++", "Windows API", "Winsock", "Multithreading"],
    highlight:
      "Ứng dụng lập trình socket, đa luồng để tối ưu hiệu suất truyền dữ liệu, giảm độ trễ.",
    githubURL: ["https://github.com/Cong-Chau/RemoteDesktop"],
  },
  {
    title: "Quản lý khóa học (Console App)",
    completeTime: "04/2023 - 06/2023",
    description:
      "Ứng dụng console bằng C++ để quản lý học viên, khóa học, đăng ký học và phân loại kết quả.",
    skills: ["C++", "File I/O", "Data Structures"],
    highlight:
      "Ứng dụng đầy đủ CRUD trong môi trường console, rèn luyện kỹ năng cấu trúc dữ liệu và lập trình hướng đối tượng.",
    githubURL: ["https://github.com/Cong-Chau/CourseManage"],
  },
];

function Projects() {
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
