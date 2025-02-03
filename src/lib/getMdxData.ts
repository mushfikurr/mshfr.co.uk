import { MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import fs from "fs/promises";
import grayMatter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const CONTENT_DIR = path.join(process.cwd(), "src/app/content");

export interface Metadata {
  title: string;
  description: string;
  openGraphImage?: string;
}

async function findFileInDirectories(slug: string): Promise<string | null> {
  const directories = ["blog", "projects"];

  for (const dir of directories) {
    const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
    try {
      await fs.access(filePath);
      return dir;
    } catch {
    }
  }

  return null;
}

export async function getMdxData(
  slug: string
): Promise<{ metadata: Metadata; mdxSource: MDXRemoteSerializeResult } | null> {
  const contentType = await findFileInDirectories(slug);

  if (!contentType) {
    console.error(`File not found for slug: ${slug}`);
    return null;
  }

  const filePath = path.join(CONTENT_DIR, contentType, `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = grayMatter(fileContent);

    const mdxSource = await serialize(content);
    const openGraphImage = data.openGraphImage ?? "";

    const formattedMetadata = {
      title: data.title,
      description: data.description,
      openGraph: {
        images: [
          {
            url: openGraphImage,
            alt: data.title,
          },
        ],
      },
    };

    return { metadata: formattedMetadata as Metadata, mdxSource };
  } catch (error) {
    console.error("Error reading file:", error);
    return null; // Return null if the file is not found or an error occurs
  }
}
