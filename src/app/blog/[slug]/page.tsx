import MDXContent from "@/components/MDXContent";
import { notFound } from "next/navigation";
import { getBlogData } from "@/lib/getBlogMetadata";

export interface FrontmatterMetadata {
  title: string;
  description: string;
  openGraphImage?: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const { metadata } = await getBlogData(slug);

  return metadata;
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { mdxSource } = await getBlogData(slug);

  if (!slug || !mdxSource?.compiledSource) {
    return notFound();
  }

  return <MDXContent mdxSource={mdxSource} />;
}
