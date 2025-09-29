"use client";
import { SunMoon, Earth, ChevronDown } from "lucide-react";
function Header() {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 flex flex-row gap-4 justify-between px-4 py-2 md:px-8 md:py-4 text-white`}
    >
      <div className={`flex flex-row md:gap-4 items-center`}>
        <p className={`font-bold `}>PHAN CÔNG CHÂU</p>
        <nav
          className={`hidden md:flex flex-row gap-2 text-center bg-white/12 rounded-[8px] p-1 backdrop-blur-sm`}
        >
          <a
            href="#home"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            Trang chủ
          </a>
          <a
            href="#about"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            Giới thiệu
          </a>
          <a
            href="#skills"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            Kỹ năng
          </a>
          <a
            href="#"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            Dự án
          </a>
          <a
            href="#"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            Liên hệ
          </a>
        </nav>
      </div>
      <div className="flex flex-row gap-4 items-center ">
        <button
          className={`cursor-target flex flex-row bg-white/11 rounded-[8px]  gap-0.5 h-12 justify-center items-center py-1 px-3 hover:bg-white/24 duration-200 backdrop-blur-sm`}
        >
          <Earth />
          <p className="block md:hidden ml-2">Vi</p>
          <p className="hidden md:block ml-2">Tiếng Việt</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
