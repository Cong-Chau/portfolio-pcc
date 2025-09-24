"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mail, PhoneCall, Github, Linkedin, MapPin } from "lucide-react";

function Landing() {
  return (
    <div className="text-white w-full min-h-[calc(100vh-80px)] flex flex-row justify-between pt-24 pl-48 pr-36">
      <div className="flex flex-col gap-4">
        <div data-cursor className="relative w-fit h-fit">
          <div className="absolute inset-0 rounded-[16px] bg-gray-600 blur-sm"></div>
          <span className="relative z-10 bg-linear-gray-black border border-gray-400 rounded-[16px] font-semibold text-xl py-2 px-4 inline-block">
            Phan Công Châu
          </span>
        </div>
        <span className="font-bold text-8xl">Frontend</span>
        <span className="font-bold text-8xl bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
          Developer
        </span>
        <div className="flex flex-row items-center mt-4">
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
        </div>
        <div className="flex flex-row items-center">
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
        </div>
        <div className="flex flex-row items-center">
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
        </div>
        <div className="flex flex-row items-center">
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
        </div>
        <div className="flex flex-row  items-center">
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
        </div>
      </div>
      <DotLottieReact
        src="/gifs/Technology.lottie"
        className="w-[767px] h-[407px]  mt-12"
        loop
        autoplay
      />
    </div>
  );
}

export default Landing;
