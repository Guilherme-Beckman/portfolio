import styles from "./blog-card.module.css"
import Image from "next/image"
interface BlogCardProps {
  src: string;
  title: string;
  date: string;
}
export function BlogCard({ src, title, date }: BlogCardProps) {
  return (
    <div className={styles.card}>
      <Image src={src} width={200} height={100} alt={title}></Image>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.date}>{date}</h2>
    </div>
  )
}
