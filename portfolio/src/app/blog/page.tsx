import { BlogCard } from "../components/blog/blog-card"
import styles from "./blog.module.css"
export default function Blog() {

  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}> <div className={styles.blogCard}>
        <BlogCard
          src="https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png"
          title="example-blog"
          date="2025-10-06"
          topics={["AWS", "Teste", "Teste"]}
        >
        </BlogCard>
      </div>
        <div className={styles.blogCard}>
          <BlogCard
            src="https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png"
            title="Teste"
            date="2025-10-06"

            topics={["AWS", "Teste", "Teste"]}
          >

          </BlogCard>
        </div>

      </div>
      <div className={styles.blogContainer}> <div className={styles.blogCard}>
        <BlogCard
          src="https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png"
          title="Teste"
          date="2025-10-06"
          topics={["AWS", "Teste", "Teste"]}
        >
        </BlogCard>
      </div>
        <div className={styles.blogCard}>
          <BlogCard
            src="https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png"
            title="Teste"
            date="2025-10-06"
            topics={["AWS", "Teste", "Teste"]}
          >

          </BlogCard>
        </div>

      </div>

    </div>
  )
}
