"use client";

import { Archive, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../utils/utils";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="space-y-1.5">
        <h1 className="text-lg font-semibold tracking-tight drop-shadow-glow">
          Projects
        </h1>
        <p className="text-text-300">
          {"Projects I'm actively working on and maintaining. Made with ✨"}
        </p>
      </div>
      <div className="relative">
        <ProjectCard
          title="Velvara"
          description="A self-hosted, headless e-commerce platform for premium perfume oils, built with Medusa.js, Next.js, and Stripe."
          href="https://velvara.co.uk"
        />
        <ProjectCard
          title="Focality"
          description="Multiplayer focus platform for everyone, built with Next.js and Convex."
          href="https://focality.netlify.app"
        />
        <ProjectCard
          title="Overline"
          description="Brings a Linux style topbar to Windows, built with Zebar and React."
          href="https://github.com/mushfikurr/overline-zebar"
        />
      </div>
      <div className="space-y-1.5">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className="text-text-300 text-sm font-semibold">Past Projects</h1>
          <Archive className="h-4 w-4 text-text-300" />
        </div>
      </div>
      <div className="relative">
        <ProjectCard
          title="enzyme-convert"
          description="Fully local media conversion tool for browsers, built with React and Ffmpeg.wasm."
          href="https://enzyme.mshfr.co.uk"
        />
        <ProjectCard
          title="yt-sample-gen"
          description="Sample generator for musicians, using YouTube, built with React and Python."
          href="https://github.com/mushfikurr/yt-sample-gen"
        />
        <ProjectCard
          title="videocollab"
          description="Multiplayer video editor platform, built with React and Electron."
          href="https://github.com/mushfikurr/videocollab"
        />
      </div>
    </div>
  );
};

interface ProjectCardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  href: string;
}
export default function ProjectCard({
  title,
  description,
  href,
}: ProjectCardProps) {
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
      <h1 className="font-medium leading-[1.1] inline-flex items-center justify-between gap-2">
        {title}{" "}
        <ArrowRight
          className="h-3 w-3 text-text-300 group-hover:text-text-200 transition-all -translate-x-1 group-hover:translate-x-1 duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          strokeWidth={3}
        />
      </h1>
      <p className="text-text-300">{description} </p>
    </Link>
  );
}
