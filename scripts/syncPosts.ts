import "dotenv/config";
import { drizzle } from "drizzle-orm/singlestore";
import { createConnection } from "mysql2/promise";
import { blogPosts } from "../src/lib/db/schema";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/app/content");
const ALLOWED_DIRECTORIES = ["projects", "blog"];

interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

async function* walk(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      yield fullPath;
    }
  }
}

function parseDate(dateString: string): bigint {
  const date = new Date(dateString);
  return BigInt(Math.floor(date.getTime() / 1000));
}

async function main() {
  const connection = await createConnection({
    host: process.env.SINGLESTORE_HOST,
    user: process.env.SINGLESTORE_USER,
    password: process.env.SINGLESTORE_PASSWORD,
    port: Number(process.env.SINGLESTORE_PORT),
    database: process.env.SINGLESTORE_DATABASE,
    ssl: {
      rejectUnauthorized: true,
    },
  });
  const db = drizzle(connection);

  for await (const filePath of walk(CONTENT_DIR)) {
    const relativePath = path.relative(CONTENT_DIR, filePath);
    const directory = relativePath.split(path.sep)[0];

    if (!ALLOWED_DIRECTORIES.includes(directory)) continue;

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);
      const frontmatter = data as Frontmatter;

      const slug = relativePath
        .replace(/\.mdx$/, "")
        .split(path.sep)
        .join("/");

      await db.insert(blogPosts).values({
        title: frontmatter.title,
        description: frontmatter.description,
        slug,
        createdAt: parseDate(frontmatter.date),
      });

      console.log(`Processed: ${slug}`);
    } catch (error) {
      console.error(`Error processing ${relativePath}:`, error);
    }
  }

  await connection.end();
}

main().catch(console.error);
