import { ChevronLeft } from "lucide-react";
import styles from "./back-arrow.module.css"
interface BackArrowProps{
  mainText?: string;
}
export function BackArrow({mainText}: BackArrowProps) {
  return (
    <div className={styles.backArrow}>
      <ChevronLeft />
      <h1>{mainText}</h1>
    </div>
  );
}
