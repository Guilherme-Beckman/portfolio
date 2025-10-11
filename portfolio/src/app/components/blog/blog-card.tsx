import Link from "next/link";
import styles from "./blog-card.module.css"
import Image from "next/image"
interface BlogCardProps {
  src: string;
  title: string;
  date: string;
  topics: string[];
}
export function BlogCard({ src, title, date, topics }: BlogCardProps) {
  return (
    <Link href={`/blog/${encodeURIComponent(title)}`} className={styles.card}>
      <div className={styles.image}>
        <Image src={src} width={200} height={100} alt={title}></Image>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.date}>{date}</h2>
        <ul className={styles.topics}>
          {
            topics.map((topic, index) => (
              <li className={styles.topic} key={index}>
                <p>#</p>
                <p>{topic}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </Link>
  )
}
