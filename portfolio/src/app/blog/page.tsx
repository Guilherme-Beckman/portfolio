
import { GetStaticProps } from "next";
import { BlogCard } from "../components/blog/blog-card";
import { getPosts } from "../lib/getPosts";
import styles from "./blog.module.css";



export default async function Blog() {
  const posts = await getPosts()
  return (
    <div className={styles.blog}>
      {posts.map((post) => (
        <div key={post.slug} className={styles.blogCard}>
          <BlogCard
            src={post.image}
            title={post.title}
            date={post.date}
            topics={post.topics}
            link={post.slug}
          />
        </div>
      ))}
    </div>
  );
}

