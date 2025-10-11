import Link from "next/link";
import styles from "./blog-card.module.css"
import Image from "next/image"
interface BlogCardProps {
  src: string;
  title: string;
  date: string;
}
export function BlogCard({ src, title, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${encodeURIComponent(title)}`} className={styles.card}>
      <div className={styles.image}>
        <Image src={src} width={200} height={100} alt={title}></Image>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.date}>{date}</h2>
      </div>
    </Link>
  )
}
