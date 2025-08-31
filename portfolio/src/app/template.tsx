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
      <div id="page-overlay" className={styles["page-overlay"]}></div>
      {children}
    </div>
  );
}

/* template.module.css */


