import { ChevronLeft } from "lucide-react";
import styles from "./back-arrow.module.css";
import Link from "next/link";
interface BackArrowProps {
  mainText?: string;
}
export function BackArrow({ mainText }: BackArrowProps) {
  return (
    <div className={styles.backArrow}>
      <Link href={"/projects"} className={styles.link}>
        <ChevronLeft />
        <h1>{mainText}</h1>
      </Link>
    </div>
  );
}
