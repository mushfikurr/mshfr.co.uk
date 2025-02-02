import MDXContent from "@/components/MDXContent";
import { getProjectData } from "@/lib/getProjectsMetadata";
import { notFound } from "next/navigation";

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
  const { metadata } = await getProjectData(slug);

  return metadata;
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { mdxSource } = await getProjectData(slug);

  if (!slug || !mdxSource?.compiledSource) {
    return notFound();
  }

  return <MDXContent mdxSource={mdxSource} />;
}
