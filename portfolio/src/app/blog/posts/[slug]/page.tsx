import { getPost } from "@/app/lib/getPost";
import { getPosts } from "@/app/lib/getPosts";


interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <main className="prose mx-auto my-10">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.image && <img src={post.image} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
