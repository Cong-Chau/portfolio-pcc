"use client";
import { useEffect, useState, useRef } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  style?: string;
}

export default function TypingText({
  text = "|",
  speed = 100,
  style = "",
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0); // lưu index hiện tại
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  //   const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setDisplayed(""); // reset text
    indexRef.current = 0; // reset index

    const type = () => {
      if (indexRef.current < text.length) {
        const char = text[indexRef.current];
        if (char !== undefined) {
          setDisplayed((prev) => prev + char);
        }
        indexRef.current += 1;
        timeoutRef.current = setTimeout(type, speed);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  //   return <span className="font-bold text-2xl">{displayed}</span>;
  return <span className={style}>{displayed}</span>;
}
