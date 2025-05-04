import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getBlogPosts() {
  const dir = path.join(process.cwd(), "blog-content");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title,
      description: data.description,
      image: data.image,
      type: data.type,
      date: data.date,
    };
  });

  return posts.filter((post) => post.title); // filter out invalid ones
}
