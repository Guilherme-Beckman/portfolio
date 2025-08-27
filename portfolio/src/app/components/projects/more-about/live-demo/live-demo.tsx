import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./live-demo.module.css";
export function LiveDemo() {
  return (
    <div className={styles.liveDemo}>
      <SquareArrowOutUpRight />
      <h1>Live Demo</h1>
    </div>
  );
}
