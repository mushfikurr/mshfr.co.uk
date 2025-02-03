"use client";

import { blogPosts } from "@/lib/db/schema";
import { AppWindow, ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "../utils/utils";
import Card from "./ui/Card";
import { EmojiCallout } from "./ui/EmojiCallout";
import { PrimaryButton } from "./ui/PrimaryButton";
import { Revealable } from "./ui/Revealable";

type BlogPost = typeof blogPosts.$inferSelect;
interface ProjectsProps {
  posts: BlogPost[];
}

export const Projects: React.FC<ProjectsProps> = ({ posts }: ProjectsProps) => {
  const [expanded, setExpanded] = useState(false);
  const showMoreBtnRef = useRef<HTMLButtonElement>(null);
  const HIDE_SHOW_MORE = true; // Flag for hiding the show more button. If there are more than three projects, set this to false.

  const initialDisplayedContent = (
    <>
      {posts.map((p) => {
        console.log(p.createdAt);
        return (
          <ProjectCard
            key={p.slug}
            title={p.title}
            summary={p.description}
            href={p.slug}
            date={p.createdAt}
          />
        );
      })}
    </>
  );

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col h-full gap-8 overflow-y-auto">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <EmojiCallout emoji={"📌"} heading="I'm a project driven person.">
          Below are products I have worked on meticulously that have allowed me
          to solidify my skills, and each solve a problem that I have
          encountered.
        </EmojiCallout>
      </div>
      <div className="flex flex-col h-full gap-6 grow">
        <Revealable
          initialDisplayedContent={initialDisplayedContent}
          expanded={expanded}
          className={"flex flex-col gap-6"}
        ></Revealable>
      </div>
      <div className="flex justify-center">
        <PrimaryButton
          ref={showMoreBtnRef}
          className={cn(
            "inline-flex gap-2 items-center",
            HIDE_SHOW_MORE && "hidden"
          )}
          onClick={handleExpand}
        >
          Show {expanded ? "less" : "more"}{" "}
          {expanded ? (
            <ArrowUpFromLine className="h-4" />
          ) : (
            <ArrowDownFromLine className="h-4" />
          )}
        </PrimaryButton>
      </div>
    </div>
  );
};

interface ProjectCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  summary: string;
  href: string;
  date: bigint;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  href,
  date,
}: ProjectCardProps) => {
  function parseTimestamp(timestamp: bigint): Date {
    return new Date(Number(timestamp) * 1000);
  }
  return (
    <Link href={href}>
      <Card
        className={cn(
          "flex flex-col gap-3 justify-between grow overflow-y-auto shadow-md py-6 px-5",
          "hover:bg-primary/10 active:bg-secondary/30",
          "transition-colors ease-in-out duration-300"
        )}
      >
        <div className="space-y-1.5">
          <div className="flex items-center justify-between group">
            <h3 className="text-base font-medium">{title}</h3>
            <AppWindow className="hidden sm:block h-4 w-4" />
          </div>

          <p
            className={cn(
              "text-text-300 line-clamp-2 text-sm max-sm:line-clamp-none"
            )}
          >
            {summary}
          </p>
          <p
            className={cn(
              "text-text-300 line-clamp-2 text-sm max-sm:line-clamp-none pt-2"
            )}
          >
            {parseTimestamp(date).toLocaleString("en-GB").split(",")[0]}
          </p>
        </div>
      </Card>
    </Link>
  );
};
