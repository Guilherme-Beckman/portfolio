import matter from "gray-matter";

export async function getPosts() {
  const res = await fetch(
    "https://api.github.com/repos/Guilherme-Beckman/portfolio-assets/contents/blog/posts"
  );

  if (!res.ok) throw new Error("Erro ao buscar posts do GitHub");

  const files = await res.json();

  const posts = await Promise.all(
    files
      .filter((file: any) => file.name.endsWith(".md"))
      .map(async (file: any) => {
        const slug = file.name.replace(/\.md$/, "");
        const raw = await fetch(file.download_url).then((r) => r.text());
        const { data } = matter(raw);

        return {
          slug,
          title: data.title || slug,
          date: data.date || "",
          topics: data.topics || [],
          image: data.image || "",
        };
      })
  );

  // ordena por data decrescente
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
