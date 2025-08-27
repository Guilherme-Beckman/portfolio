import styles from "./social-button.module.css";
import { ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
}

export function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <div className={styles.socialBtn} onClick={onClick}>
      <span className={styles.socialIcon}>{icon}</span>
      {label && <h1 className={styles.socialLabel}>{label}</h1>}
      <div className={styles.socialRipple}></div>
    </div>
  );
}
