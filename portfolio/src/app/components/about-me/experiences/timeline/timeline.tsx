"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./timeline.module.css";

export default function Timeline() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // OPÇÃO 1: Baseado na posição atual da janela (0-100% da viewport)
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const percent = Math.min((scrollY / windowHeight) *120, 100);

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineLine}>
        <div
          className={styles.timelineProgress}
          style={{ height: `${progress}%` }}
          ref={progressRef}
        />
      </div>
    </div>
  );
}