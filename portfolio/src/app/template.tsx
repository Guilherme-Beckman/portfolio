"use client";
import { ReactNode, useEffect } from "react";
import styles from "./template.module.css";
import { animationPageIn } from "./utils/animations";
export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    animationPageIn();
  }, []);
  return (
    <div>
      <div id="banner-1" className={styles["banner-1"]}></div>
      <div id="banner-2" className={styles["banner-2"]}></div>
      <div id="banner-3" className={styles["banner-3"]}></div>
      <div id="banner-4" className={styles["banner-4"]}></div>

      {children}
    </div>
  );
}
