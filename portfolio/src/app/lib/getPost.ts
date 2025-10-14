import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export async function getPost(slug: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/Guilherme-Beckman/portfolio-assets/main/blog/posts/${slug}.md`
  )
  if (!res.ok) {
    throw new Error("Error while trying to fetch posts")
  }

  const fileContents = await res.text()
  const { content, data } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return { slug, contentHtml, ...data }

}
