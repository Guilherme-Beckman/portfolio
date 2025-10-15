import { getPost } from "@/app/lib/getPost";
import { getPosts } from "@/app/lib/getPosts";
import styles from "./page.module.css"
import { NavBlog } from "@/app/components/blog/nav-blog/nav-blog";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <div className={`${styles.blogPage} animatedBg`}>
      <NavBlog />
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      {post.image && <img src={post.image} alt={post.title} className={styles.mainImage} />}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
