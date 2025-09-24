"use client";
import { useState } from "react";
import { Mail, PhoneCall, Github, Linkedin, MapPin } from "lucide-react";
import { useDarkMode } from "@/contexts/DarkModeContext";

interface Bubble {
  icon: React.ReactNode;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  text: string;
}

export default function IconBubbles() {
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { darkMode, setDarkMode } = useDarkMode();

  const bubbles: Bubble[] = [
    {
      icon: <Mail size={24} />,
      size: 50,
      x: 10,
      y: -90,
      delay: 0,
      duration: 2,
      text: "Email: congchau206@gmail.com",
    },
    {
      icon: <PhoneCall size={28} />,
      size: 60,
      x: 30,
      y: -90,
      delay: 0.5,
      duration: 2.5,
      text: "Phone: 0703913350",
    },
    {
      icon: <Github size={26} />,
      size: 55,
      x: 60,
      y: -90,
      delay: 1,
      duration: 3,
      text: "Github: github.com/Cong-Chau",
    },
    {
      icon: <Linkedin size={24} />,
      size: 50,
      x: 80,
      y: -90,
      delay: 1.2,
      duration: 2.2,
      text: "LinkedIn: linkedin.com/in/phancongchau20062004/",
    },
    {
      icon: <MapPin size={30} />,
      size: 65,
      x: 45,
      y: -90,
      delay: 0.3,
      duration: 2.8,
      text: "Location: TP Hồ Chí Minh",
    },
  ];

  return (
    <>
      <div className="absolute inset-0">
        {bubbles.map((bubble, i) => (
          <div
            data-cursor
            key={i}
            className={`absolute flex justify-center items-center rounded-full ${
              darkMode ? "bg-white/20 text-white" : "bg-black/20 text-black"
            } pointer-events-auto hover:cursor-pointer hover:scale-110 transition-transform`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              bottom: `${bubble.y}px`,
              animation: `bubbleBounce ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
            }}
            onMouseEnter={(e) => {
              setHoverText(bubble.text);
            }}
            onMouseMove={(e) => {
              setCursorPos({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setHoverText(null)}
          >
            {bubble.icon}
          </div>
        ))}
      </div>

      {/* Con trỏ text hover */}
      {hoverText && (
        <div
          className="fixed pointer-events-none bg-black text-white text-sm px-2 py-1 rounded shadow-lg z-50"
          style={{
            left: cursorPos.x + 15,
            top: cursorPos.y + 15,
          }}
        >
          {hoverText}
        </div>
      )}
    </>
  );
}
