"use client";
import CVPreview from "../cards/CVPreview";
import TypingText from "../cards/TextType";
import { motion } from "framer-motion";
import ScrambledText from "../cards/ScrambledText";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-start gap-4 text-white mb-8 scroll-mt-20"
    >
      <p className="w-full text-center font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        About Me
      </p>
      <p className={`text-center w-4/5 md:w-2/5 text-white`}>
        Passionate developer with a love for creating beautiful and functional
        web experiences
      </p>
      <div className="flex flex-row w-4/5 justify-center gap-8 mt-8 ">
        <div className="w-full md:w-2/5 flex flex-col items-center gap-4 rounded-full">
          {/* avatar */}
          <div className="relative w-64 h-64 mb-8">
            <div className="absolute inset-0 rounded-full bg-white blur-sm"></div>
            {/* ảnh avatar */}
            <Tilt
              tiltMaxAngleX={15} // góc nghiêng tối đa theo trục X
              tiltMaxAngleY={15} // góc nghiêng tối đa theo trục Y
              perspective={1000} // chiều sâu 3D
              scale={1} // phóng to nhẹ khi hover
              transitionSpeed={1000} // tốc độ animation (ms)
              gyroscope={true} // cho phép xoay theo cảm biến gyroscope trên mobile
            >
              <motion.img
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: false, amount: 0.1 }}
                className="relative w-full h-full object-cover rounded-full cursor-target"
                src="/images/avatar.jpg"
                alt="About Me"
              />
            </Tilt>
          </div>
          <ScrambledText
            className={`scrambled-text-demo text-white`}
            radius={70}
            duration={1.1}
            speed={0.5}
            scrambleChars="()[]{}<>/\\|@#$%^&*~`-+=;:,.?!"
          >
            Xin chào, tôi là Phan Công Châu
            <br />
            <br />
            Tôi là sinh viên Khoa Công nghệ Thông tin, Trường Đại học Khoa học
            Tự nhiên TP Hồ Chí Minh.
            <br />
            <br />
            Tôi hiện theo đuổi lĩnh vực Frontend Development, với niềm đam mê
            xây dựng giao diện hiện đại, tối ưu trải nghiệm người dùng.
            <br />
            <br />
            Tôi hiện theo đuổi lĩnh vực Frontend Development, với niềm đam mê
            xây dựng giao diện hiện đại, tối ưu trải nghiệm người dùng.
            <br />
            <br />
            Tôi luôn tìm tòi, học hỏi những công nghệ mới nhất, áp dụng để phát
            triển kỹ năng và tạo ra những sản phẩm web chất lượng, vừa thẩm mỹ
            vừa hiệu quả.
          </ScrambledText>
        </div>
        <div className="hidden md:block w-3/5 relative ml-8">
          <Tilt
            tiltMaxAngleX={5} // góc nghiêng tối đa theo trục X
            tiltMaxAngleY={5} // góc nghiêng tối đa theo trục Y
            perspective={2000} // chiều sâu 3D
            scale={1} // phóng to nhẹ khi hover
            transitionSpeed={1000} // tốc độ animation (ms)
            gyroscope={true} // cho phép xoay theo cảm biến gyroscope trên mobile
          >
            <CVPreview />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default About;
