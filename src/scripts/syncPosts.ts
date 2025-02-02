import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { db } from "../lib/db/db.js";
import { blogPosts as blogPostsSchema } from "../lib/db/schema.js";
import { eq } from "drizzle-orm";

const BLOG_DIRS = [
  path.join(process.cwd(), "content/blog"),
  path.join(process.cwd(), "content/projects"),
];

async function syncBlogPosts() {
  const files = BLOG_DIRS.flatMap((dir) => {
    return fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => path.join(dir, file));
  });

  for (const filePath of files) {
    const fileName = path.basename(filePath, ".mdx");
    const slug = filePath.includes("blog")
      ? `blog/${fileName}`
      : `projects/${fileName}`;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    const {
      title,
      description = `Blog post about ${fileName}`,
      date,
    } = frontmatter;
    const createdAt = date ? new Date(date).getTime() : Date.now();

    const postExists = await db
      .select()
      .from(blogPostsSchema)
      .where(eq(blogPostsSchema.title, title))
      .limit(1);

    if (postExists.length > 0) {
      console.log(`Post with title "${title}" already exists. Skipping...`);
      continue;
    }

    console.log(`Adding "${title}" to the database with slug: ${slug}`);
    await db.insert(blogPostsSchema).values({
      title,
      description,
      slug,
      createdAt: BigInt(createdAt),
    });
  }

  console.log("✅ Blog posts synced successfully.");
}

syncBlogPosts().catch((err) => {
  console.error("Error syncing blog posts:", err);
});
