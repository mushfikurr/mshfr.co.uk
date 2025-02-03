import Card from "@/components/ui/Card";
import { EmojiCallout } from "@/components/ui/EmojiCallout";
import { CustomLink } from "@/components/ui/Link";
import { QUERIES } from "@/lib/db/queries";
import { blogPosts } from "@/lib/db/schema";
import { cn } from "@/utils/utils";
import Link from "next/link";

type BlogPost = typeof blogPosts.$inferSelect;

export default async function ProjectsPage() {
  const posts: BlogPost[] = await QUERIES.getAllPosts();

  return (
    <div className="flex flex-col gap-y-10">
      <div className="space-y-4">
        <h1 className="text-lg font-medium">Blog</h1>
        <EmojiCallout
          emoji={"🖊️"}
          heading="Writing is the key to understanding."
        >
          Recently, I&apos;ve had the urge to write down my thoughts and ideas.
          Below are some of the things I&apos;ve written about.
        </EmojiCallout>
      </div>
      <div className="flex flex-col h-full gap-6">
        {posts.map((p) => {
          return (
            <BlogCard
              key={p.slug}
              title={p.title}
              description={p.description}
              type={p.type}
              date={p.createdAt}
              href={p.slug}
            >
              <CustomLink href={p.slug}>Read more</CustomLink>
            </BlogCard>
          );
        })}
      </div>
    </div>
  );
}

interface BlogCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  href: string;
  type: string;
  date: bigint;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  href,
  type,
  date,
  ...props
}: BlogCardProps) => {
  function formatDate(timestamp: bigint): Date {
    const milliseconds = Number(timestamp) * 1000; // Convert seconds to milliseconds
    return new Date(milliseconds);
  }

  return (
    <Card
      className={cn(
        "flex flex-col gap-3 justify-between grow overflow-y-auto shadow-md py-6 px-5",
        "hover:bg-secondary/25 active:bg-secondary/30",
        "transition-colors ease-in-out duration-300"
      )}
    >
      <div className="flex flex-wrap justify-between items-center">
        <p className="w-fit text-text-400 text-xs font-medium">#{type}</p>
        <p className="text-xs text-text-400 font-medium">
          {formatDate(date).toLocaleString().split(",")[0]}
        </p>
      </div>
      <Link
        href={href}
        className="absolute inset-0"
        aria-label={`Go to ${title}`}
      />
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between group">
          <h3 className="text-base font-medium">{title}</h3>
        </div>

        <p className="text-text-300 line-clamp-2 text-sm max-sm:line-clamp-none">
          {description}
        </p>
        <div className="flex flex-col">{props.children}</div>
      </div>
    </Card>
  );
};
