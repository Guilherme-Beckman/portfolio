"use client";
import { Typewriter } from "react-simple-typewriter";
export function TypingText() {
  return (
    <div style={{ fontSize: "3rem", color: "#fff" }}>
      <Typewriter
        words={["Bem-vindo ao meu portfolio!", "Welcome to my portfolio!"]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </div>
  );
}
