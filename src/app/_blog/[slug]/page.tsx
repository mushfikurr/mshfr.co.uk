import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { loadMdxWithMeta, getBlogPosts } from "@/lib/blog";
import { HeaderImage } from "@/components/ui/HeaderImage";
import { CustomLink } from "@/components/ui/Link";
import { Divider } from "@/components/ui/Divider";
import { TextLink } from "@/components/ui/TextLink";

const components = {
  HeaderImage,
  CustomLink,
  Divider,
  a: (props: React.ComponentProps<typeof TextLink>) => <TextLink {...props} />,
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className="hover:text-text-200 transition-colors ease-in-out duration-700"
    >
      {children}
    </p>
  ),
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post: any) => ({ slug: post.slug }));
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = await loadMdxWithMeta(slug);
  return <MDXRemote source={content} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await loadMdxWithMeta(slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.image || "/default-og.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.image || "/default-og.png"],
    },
  };
}

export const dynamicParams = false;
