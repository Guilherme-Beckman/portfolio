
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPost(slug: string) {
  const encodedSlug = encodeURIComponent(slug + ".md");

  const res = await fetch(
    `https://api.github.com/repos/Guilherme-Beckman/portfolio-assets/contents/blog/posts/${encodedSlug}`
  );

  if (!res.ok) throw new Error(`Erro ao buscar o post ${slug}`);

  // ⚡ Decodifica Base64
  const rawData = await res.json();
  const markdown = Buffer.from(rawData.content, "base64").toString("utf-8");

  // Parse frontmatter e conteúdo
  const { data, content } = matter(markdown);

  // Transforma Markdown em HTML
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

export async function getPosts() {
  const res = await fetch(
    `https://api.github.com/repos/Guilherme-Beckman/portfolio-assets/contents/blog/posts`
  );

  if (!res.ok) throw new Error("Erro ao buscar a lista de posts");

  const files = await res.json();

  // Filtra apenas arquivos .md
  return files
    .filter((file: any) => file.name.endsWith(".md"))
    .map((file: any) => ({
      slug: file.name.replace(/\.md$/, ""),
    }));
}
