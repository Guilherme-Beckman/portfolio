
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPost(slug: string) {
  // Adiciona .md e codifica corretamente para URL
  const encodedSlug = encodeURIComponent(slug + ".md");

  const res = await fetch(
    `https://api.github.com/repos/Guilherme-Beckman/portfolio-assets/contents/blog/posts/${encodedSlug}`
  );
  if (!res.ok) throw new Error(`Erro ao buscar o post ${slug}`);

  const raw = await res.text();
  const { data, content } = matter(raw);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    topics: data.topics || [],
    image: data.image || "",
    contentHtml,
  };
}
