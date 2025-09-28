"use client";
import { SunMoon, Earth, ChevronDown } from "lucide-react";
import { useDarkMode } from "@/contexts/DarkModeContext";

function Header() {
  const { darkMode, setDarkMode } = useDarkMode();

  console.log(darkMode);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 flex flex-row gap-4 justify-between px-4 py-2 md:px-8 md:py-4  ${
        darkMode === true ? "text-white" : "text-black"
      }`}
    >
      <div className={`flex flex-row md:gap-4 items-center`}>
        <p className={`font-bold `}>PHAN CÔNG CHÂU</p>
        <nav
          className={`hidden md:flex flex-row gap-2 text-center ${
            darkMode ? "bg-white/12" : "bg-black/12"
          }  rounded-[8px] p-1 backdrop-blur-sm`}
        >
          <a
            data-cursor
            href="#home"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold"
          >
            Trang chủ
          </a>
          <a
            data-cursor
            href="#about"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold"
          >
            Giới thiệu
          </a>
          <a
            data-cursor
            href="#"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold"
          >
            Kỹ năng
          </a>
          <a
            data-cursor
            href="#"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold"
          >
            Dự án
          </a>
          <a
            data-cursor
            href="#"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold"
          >
            Liên hệ
          </a>
        </nav>
      </div>
      <div className="flex flex-row gap-4 items-center ">
        <div
          data-cursor
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className={`${
            darkMode ? "bg-white/12" : "bg-black/12"
          } rounded-[8px] p-1  h-12 w-12 flex justify-center items-center hover:bg-white/24 duration-200 backdrop-blur-sm`}
        >
          <SunMoon className="w-6 h-6" />
        </div>
        <button
          data-cursor
          className={`flex flex-row ${
            darkMode ? "bg-white/11" : "bg-black/12"
          } rounded-[8px]  gap-0.5 h-12 justify-center items-center py-1 px-3 hover:bg-white/24 duration-200 backdrop-blur-sm`}
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
