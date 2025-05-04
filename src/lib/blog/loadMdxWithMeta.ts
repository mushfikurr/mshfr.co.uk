import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function loadMdxWithMeta(slug: string) {
  const fullPath = path.join(process.cwd(), "blog-content", `${slug}.mdx`);
  const raw = await fs.readFile(fullPath, "utf-8");

  const { content, data: meta } = matter(raw);

  return { content, meta };
}
