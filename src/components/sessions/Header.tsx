"use client";
import { Earth } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function Header() {
  // Lấy header
  const { t, lang, setLang } = useLanguage();
  // Mảng nav
  const nav = t("header.nav");

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 flex flex-row gap-4 justify-between px-4 py-2 md:px-8 md:py-4 text-white`}
    >
      <div className={`flex flex-row md:gap-4 items-center`}>
        <p className={`font-bold `}>{t("header.name")}</p>
        <nav
          className={`hidden md:flex flex-row gap-2 text-center bg-white/12 rounded-[8px] p-1 backdrop-blur-sm`}
        >
          <a
            href="#home"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            {nav[0]}
          </a>
          <a
            href="#about"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            {nav[1]}
          </a>
          <a
            href="#skills"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            {nav[2]}
          </a>
          <a
            href="#projects"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            {nav[3]}
          </a>
          <a
            href="#contact"
            className="hover:bg-white/24 duration-200 m-1 p-1 px-2 rounded-[4px] font-semibold cursor-target"
          >
            {nav[4]}
          </a>
        </nav>
      </div>
      <div className="flex flex-row gap-4 items-center ">
        <button
          onClick={() => setLang(lang === "vi" ? "en" : "vi")}
          className={`cursor-target flex flex-row bg-white/11 rounded-[8px]  gap-0.5 h-12 justify-center items-center py-1 px-3 hover:bg-white/24 duration-200 backdrop-blur-sm`}
        >
          <Earth />
          <p className="block md:hidden ml-2">{lang == "vi" ? "Vi" : "En"}</p>
          <p className="hidden md:block ml-2"> {nav[5]}</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
