"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Page() {
  return (
    <h1 style={{ fontSize: "2rem", color: "#fff" }}>
      <Typewriter
        words={[
          "Bem-vindo ao meu site!",
          "Desenvolvedor Full Stack.",
          "Vamos criar algo incrível.",
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
  );
}
