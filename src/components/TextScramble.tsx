"use client";

import { useEffect, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$*&%!";

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      clearInterval(interval);
      
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; 
      }, 30);
    };

    startScramble();

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}