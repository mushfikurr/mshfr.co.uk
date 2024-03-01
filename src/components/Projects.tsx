import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ChevronDown,
  Github,
} from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "../utils/utils";
import Card from "./ui/Card";
import { Revealable } from "./ui/Revealable";
import { ProjectDialog, ProjectDialogProps } from "./ui/Dialog";
import { EmojiCallout } from "./ui/EmojiCallout";
import { IconLinkProps } from "./ui/IconLink";
import { PrimaryButton } from "./ui/PrimaryButton";
import { BookalContent, bookalProps } from "../content/Bookal";

export const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const showMoreBtnRef = useRef<HTMLButtonElement>(null);

  const initialDisplayedContent = (
    <>
      <ProjectCard {...bookalProps} />
    </>
  );

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col h-full gap-8 overflow-y-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold pt-8">Projects</h1>
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
          setExpanded={setExpanded}
          className={"flex flex-col gap-6"}
        >
          <ProjectCard
            title="Bookal"
            description="Hello"
            summary="Hello"
            imgSrc="/img/stock-application-image.png"
            links={[{ Icon: Github, title: "View GitHub repository" }]}
            techStack={[{ Icon: Github, title: "GitHub" }]}
          />
        </Revealable>
      </div>
      <div className="flex justify-center">
        <PrimaryButton
          ref={showMoreBtnRef}
          className="inline-flex gap-2 items-center"
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

export interface Link extends IconLinkProps {
  title: string;
}

export interface ProjectCardProps extends ProjectDialogProps {
  summary: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  summary,
  ...dialogProps
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [hasExpandedBefore, setHasExpandedBefore] = useState(false);

  const handleDescExpand = () => {
    if (!hasExpandedBefore) {
      setHasExpandedBefore(true);
    }
    setExpanded(!expanded);
  };

  return (
    <Card className="flex flex-col gap-8 justify-between grow overflow-y-auto shadow-md">
      <div className="space-y-1">
        <button
          className="text-base font-medium flex items-center group"
          onClick={handleDescExpand}
        >
          {dialogProps.title}
          <span className="px-3">
            <ChevronDown
              className={cn(
                "h-4 w-4 text-text-400",
                expanded && "rotate-180",
                "group-hover:text-text-100",
                "transition-all duration-300 ease-in-out"
              )}
            />
          </span>
        </button>
        <p
          className={cn(
            "text-text-300 line-clamp-2 text-sm",
            expanded && "hidden"
          )}
        >
          {summary}
        </p>
      </div>
      <div className="flex justify-between w-full items-center gap-6 max-sm:justify-end">
        <div className="flex-1 flex gap-3 items-start text-sm overflow-hidden max-sm:hidden">
          <p className="underline underline-offset-4 decoration-text-200 font-semibold">
            Skills
          </p>
          <div className="flex gap-2 gap-y-0.5 flex-wrap font-medium line-clamp-2">
            {dialogProps.techStack.map((t) => (
              <p key={t.title} className="text-text-400">
                {t.title}
              </p>
            ))}
          </div>
        </div>
        <ProjectDialog {...dialogProps} key={dialogProps.title} />
      </div>
    </Card>
  );
};
