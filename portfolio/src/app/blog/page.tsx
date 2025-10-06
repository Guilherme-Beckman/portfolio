import { BlogCard } from "../components/blog/blog-card"
import styles from "./blog.module.css"
export default function Blog() {

  return (
    <div className={styles.blogContainer}>
      <BlogCard src="icons/skills/typescript.svg"
        title="Teste"
        date="2025-10-06
"      ></BlogCard>
    </div>
  )
}
