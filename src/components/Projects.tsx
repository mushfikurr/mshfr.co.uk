"use client";

import { blogPosts } from "@/lib/db/schema";
import { AppWindow } from "lucide-react";
import Link from "next/link";
import { cn } from "../utils/utils";
import Card from "./ui/Card";
import { EmojiCallout } from "./ui/EmojiCallout";
import { CustomLink } from "./ui/Link";

type BlogPost = typeof blogPosts.$inferSelect;
interface ProjectsProps {
  posts: BlogPost[];
}

export const Projects: React.FC<ProjectsProps> = ({ posts }: ProjectsProps) => {
  return (
    <div className="flex flex-col h-full gap-y-10 overflow-y-auto">
      <div className="space-y-4">
        <h1 className="text-lg font-medium">Projects</h1>
        <EmojiCallout emoji={"📌"} heading="I'm a project driven person.">
          Below are products I have worked on meticulously that have allowed me
          to solidify my skills, and each solve a problem that I have
          encountered.
        </EmojiCallout>
      </div>
      <div className="flex flex-col h-full gap-6 grow">
        <ProjectCard
          title={"velvara.co.uk"}
          description={
            "An e-commerce store for luxury perfume oils, built with Typescript, Next.js and Tailwind."
          }
          href={"https://velvara.co.uk"}
        >
          <CustomLink href={"https://velvara.co.uk"}>Live Website</CustomLink>
          <CustomLink href={"blog/velvaras-journey"}>Blog Post</CustomLink>
        </ProjectCard>
        <ProjectCard
          title={"VideoCollab"}
          description={
            "A multiplayer video collaboration app built with Electron, React, and Tailwind."
          }
          href={"https://github.com/mushfikurr/videocollab"}
        >
          <CustomLink href={"https://github.com/mushfikurr/videocollab"}>
            GitHub
          </CustomLink>
        </ProjectCard>
        <ProjectCard
          title={"yt-sample-gen"}
          description={
            "An audio sampler that generates samples from YouTube videos. Built with Python, Flask, and React. Uses Celery to offload processing."
          }
          href={"https://github.com/mushfikurr/yt-sample-gen"}
        >
          <CustomLink href={"https://github.com/mushfikurr/yt-sample-gen"}>
            GitHub
          </CustomLink>
        </ProjectCard>
      </div>
    </div>
  );
};

interface ProjectCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  ...props
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-3 justify-between grow overflow-y-auto shadow-md py-6 px-5",
        "hover:bg-secondary/25 active:bg-secondary/30",
        "transition-colors ease-in-out duration-300"
      )}
    >
      <Link
        href={href}
        className="absolute inset-0"
        aria-label={`Go to ${title}`}
      />
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between group">
          <h3 className="text-base font-medium">{title}</h3>
          <AppWindow className="hidden sm:block h-4 w-4" />
        </div>

        <p className="text-text-300 line-clamp-2 text-sm max-sm:line-clamp-none">
          {description}
        </p>
        <div className="flex flex-col">{props.children}</div>
      </div>
    </Card>
  );
};
