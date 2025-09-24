"use client";
import { useDarkMode } from "@/contexts/DarkModeContext";

function Background() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-white"
      } fixed w-full h-screen top-0 left-0 z-[-2] overflow-hidden`}
    >
      <div
        className={`${
          darkMode ? "bg-dark-overlay" : "bg-light-overlay"
        } absolute inset-0 z-[-3]`}
      ></div>
      <div
        className={`${
          darkMode ? "ellipse-dark-1" : "ellipse-light-1"
        } w-96 h-[832px] rounded-[50%] fixed top-2 left-12 z-[-4]`}
      ></div>
      <div
        className={`${
          darkMode ? "ellipse-dark-2" : "ellipse-light-2"
        } w-[824px] h-[412px] rounded-[50%] fixed top-5 right-6 z-[-4]`}
      ></div>
      <div
        className={`${
          darkMode ? "ellipse-dark-3" : "ellipse-light-3"
        } w-[700px] h-[386px] rounded-[50%] fixed top-[400px] left-56 z-[-4]`}
      ></div>
      <div
        className={`${
          darkMode ? "ellipse-dark-4" : "ellipse-light-4"
        } w-[632px] h-[1440px] rounded-[50%] fixed top-[432px] right-4 z-[-4]`}
      ></div>
    </div>
  );
}

export default Background;
