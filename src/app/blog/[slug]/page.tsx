import MDXContent from "@/components/MDXContent";
import { notFound } from "next/navigation";
import { getBlogData } from "@/lib/getBlogMetadata";

export interface FrontmatterMetadata {
  title: string;
  description: string;
  openGraphImage?: string;
}

interface ProjectPageParams {
  slug: string;
}

export const generateMetadata = async (params: ProjectPageParams) => {
  const { slug } = params;
  const { metadata } = await getBlogData(slug);

  return metadata;
};

export default async function ProjectPage({
  params,
}: {
  params: ProjectPageParams;
}) {
  const { slug } = params;
  const { mdxSource } = await getBlogData(slug);

  if (!slug || !mdxSource?.compiledSource) {
    return notFound();
  }

  return <MDXContent mdxSource={mdxSource} />;
}
