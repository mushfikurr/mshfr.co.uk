import MDXContent from "@/components/MDXContent";
import { getMdxData } from "@/lib/getMdxData";
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
  const contentData = await getMdxData(slug);

  if (contentData) {
    return contentData.metadata;
  }

  return {
    title: "Default Title",
    description: "Default description here",
  };
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const contentData = await getMdxData(slug);

  if (!slug || !contentData?.mdxSource) {
    return notFound();
  }

  const { mdxSource } = contentData;

  return <MDXContent mdxSource={mdxSource} />;
}
