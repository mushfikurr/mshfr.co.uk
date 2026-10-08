import Chip from "@/components/ui/Chip";
import { CustomLink } from "@/components/ui/Link";
import { getBlogPosts } from "@/lib/blog";
import { cn } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col gap-y-6">
      <div className="space-y-1.5">
        <h1 className="text-lg font-semibold tracking-tight drop-shadow-glow">
          Blog
        </h1>
        <p className="text-text-300">
          Recent writings, mostly about the things I build.
        </p>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostLink
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/blog/${p.slug}`}
            type={p.type}
            date={p.date}
          >
            <CustomLink href={`/blog/${p.slug}`}>Read more</CustomLink>
          </BlogPostLink>
        ))}
      </div>
    </div>
  );
}

interface BlogPostLinkProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  href: string;
  date: string;
  type: string;
}

function BlogPostLink({
  title,
  description,
  href,
  date,
  type,
}: BlogPostLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-none flex flex-col items-start gap-0.5 py-3 px-4 -mx-4 text-sm space-y-1 group",
        "border-text-50/10 border-t-0 border-x-0 border-b rounded-b-none",
        "hover:bg-secondary/30",
        "first:rounded-t-md",
        "last:border-none last:rounded-b-md",
        "transition-colors ease-in-out duration-300"
      )}
    >
      <div className="mb-0.5 space-y-0.5">
        <h1 className="font-medium leading-[1.1] inline-flex items-center justify-between gap-2">
          {title}
          <ArrowRight
            className="h-3 w-3 mt-0.5 text-text-300 group-hover:text-text-200 transition-all -translate-x-1 group-hover:translate-x-1 duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            strokeWidth={3}
          />
        </h1>
        <p className="text-text-300">{description} </p>
      </div>

      <div className="flex gap-3 justify-between items-center text-xs w-full text-text-300">
        <p>{date}</p>
        <Chip className="">#{type}</Chip>
      </div>
    </Link>
  );
}
