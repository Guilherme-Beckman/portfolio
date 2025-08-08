"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./timeline.module.css";

export default function Timeline() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const percent = (scrollY / totalHeight) * 100;
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
        <div
          className={styles.avatar}
          style={{ top: `calc(${progress}% - 12px)` }}
        />
      </div>
    </div>
  );
}
