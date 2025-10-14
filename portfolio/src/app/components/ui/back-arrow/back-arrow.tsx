import { ChevronLeft } from "lucide-react";
import styles from "./back-arrow.module.css";
import Link from "next/link";
interface BackArrowProps {
  mainText?: string;
  link?: string;
}
export function BackArrow({ mainText, link = "/projects" }: BackArrowProps) {
  return (
    <div className={styles.backArrow}>
      <Link href={link} className={styles.link}>
        <ChevronLeft />
        <h1>{mainText}</h1>
      </Link>
    </div>
  );
}
