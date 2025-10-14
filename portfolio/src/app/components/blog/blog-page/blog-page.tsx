import { NavBlog } from "../nav-blog/nav-blog"
import styles from "./blog-page.module.css"
export function BlogPage() {
  return (
    <div className={styles.blogPageContainer}>
      <div className={`${styles.blogPage} animatedBg`}>
        <NavBlog></NavBlog>


      </div>
    </div>

  )
}
