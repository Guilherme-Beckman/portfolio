import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./live-demo.module.css";
export function LiveDemo() {
  return (
    <div className={`${styles.socialBtn} ${styles.liveDemo}`}>
      <SquareArrowOutUpRight className={styles.socialIcon} />
      <h1 className={styles.socialLabel}>Live Demo</h1>
      <div className={styles.socialRipple}></div>
    </div>
  );
}
