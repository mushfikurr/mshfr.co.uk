import { MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import fs from "fs/promises";
import grayMatter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BLOG_DIR = path.join(process.cwd(), "src/app/content/blog");

export interface Metadata {
  title: string;
  description: string;
  openGraphImage?: string;
}

export async function getBlogData(
  slug: string
): Promise<{ metadata: Metadata; mdxSource: MDXRemoteSerializeResult }> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
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
    return {
      metadata: {
        title: "Default Title",
        description: "Project description here",
      },
      mdxSource: {} as MDXRemoteSerializeResult,
    };
  }
}
