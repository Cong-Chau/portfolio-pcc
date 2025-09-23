"use client";
import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface HoverStyle {
  width: string;
  height: string;
  borderRadius: string;
}

export default function StickyCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [hoverStyle, setHoverStyle] = useState<HoverStyle | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const update = () => {
      setPosition({ ...mousePos.current });
      frame.current = requestAnimationFrame(update);
    };

    frame.current = requestAnimationFrame(update);
    window.addEventListener("mousemove", moveHandler);

    const mouseOverHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (target) {
        const style = getComputedStyle(target);
        setHoverStyle({
          width: style.width,
          height: style.height,
          borderRadius: style.borderRadius,
        });
        setIsHover(true);
      }
    };

    const mouseOutHandler = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("[data-cursor]")) {
        setHoverStyle(null);
        setIsHover(false);
      }
    };

    document.addEventListener("mouseover", mouseOverHandler);
    document.addEventListener("mouseout", mouseOutHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseover", mouseOverHandler);
      document.removeEventListener("mouseout", mouseOutHandler);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-11"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          width: hoverStyle ? hoverStyle.width : "16px",
          height: hoverStyle ? hoverStyle.height : "16px",
          borderRadius: hoverStyle ? hoverStyle.borderRadius : "50%",
          backgroundColor: "rgba(255,255,255,0.24)",
          opacity: isHover ? 0 : 1,
        }}
      />
    </div>
  );
}
