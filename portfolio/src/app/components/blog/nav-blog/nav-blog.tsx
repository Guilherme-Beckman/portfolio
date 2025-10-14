import { BackArrow } from "../../ui/back-arrow/back-arrow"
import styles from "./nav-blog.module.css"
export function NavBlog() {

  return (
    <div className={styles.navBlog}>
      <BackArrow link="/blog" mainText="Blog" />
    </div>
  )
}
