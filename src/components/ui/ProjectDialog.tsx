import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, LucideIcon, X } from "lucide-react";
import { cn } from "../../utils/utils";
import { Link } from "../Projects";
import { cardClassnames } from "./Card";
import Chip from "./Chip";
import { SecondaryButton } from "./SecondaryButton";

interface Technology extends React.ComponentPropsWithoutRef<"a"> {}

export interface ProjectDialogProps {
  title: string;
  description: React.ReactNode;
  imgSrc: string;
  links: Link[];
  techStack: Technology[];
  children?: React.ReactNode;
}

export function ProjectDialog({ ...props }: ProjectDialogProps) {
  return (
    <button className="text-start">
      <Dialog.Root>
        <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 flex z-20 bg-background/60 backdrop-blur-sm" />

          <Dialog.Content
            className={cn(
              "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
              cardClassnames,
              "bg-card/70 backdrop-blur-lg shadow-lg"
            )}
          >
            <Dialog.Close
              className={cn(
                "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 z-50",
                "focus:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-opacity-75"
              )}
            >
              <X className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full text-text-100 hover:text-primary transition-colors duration-200 ease-in-out" />
            </Dialog.Close>
            <ProjectDialogContent props={props} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </button>
  );
}

const ProjectDialogContent: React.FC<{
  props: ProjectDialogProps;
}> = ({ props }) => (
  <div className="flex w-full gap-8 max-sm:flex-col">
    <div className="basis-2/5 max-sm:pt-8">
      <img
        className="object-cover rounded-l-md max-sm:rounded-md"
        src={props.imgSrc}
        alt={``}
      />
    </div>
    <div className="basis-3/5 flex flex-col items-start gap-6 justify-between relative h-full self-stretch overflow-auto">
      <div className="space-y-3 w-full">
        <div className="space-y-3">
          <Dialog.Title className="text-xl font-semibold text-text-100">
            {props.title}
          </Dialog.Title>
          <TechnologyStack techStack={props.techStack} />
          <Dialog.Description className="font-normal text-text-300 tracking-wide max-w-prose text-sm h-full">
            {props.description}
          </Dialog.Description>
        </div>

        <hr className="opacity-10" />
        <ExternalLinks links={props.links} />
      </div>

      <div className="sticky w-full flex justify-end">
        <Dialog.Close>
          <SecondaryButton>Close</SecondaryButton>
        </Dialog.Close>
      </div>
    </div>
  </div>
);

const ExternalLinks: React.FC<{ links: Link[] }> = ({
  links,
}: {
  links: Link[];
}) => (
  <ul className="text-text-400 flex flex-col items-start h-full">
    {links.map((link: Link) => (
      <AnchorExternalLink
        key={link.title}
        Icon={link.Icon}
        title={link.title}
        href={link.href}
      />
    ))}
  </ul>
);

const TechnologyStack: React.FC<{ techStack: Technology[] }> = ({
  techStack,
}: {
  techStack: Technology[];
}) => (
  <div className="flex gap-2 gap-y-2 flex-wrap w-full">
    {techStack.map(({ children, ...t }) => (
      <Chip {...t}>{children}</Chip>
    ))}
  </div>
);

interface AnchorExternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon?: LucideIcon;
  title: string;
}
export function AnchorExternalLink({
  className,
  href,
  ...props
}: AnchorExternalLinkProps) {
  return (
    <a
      className={cn(
        "text-sm w-full text-start flex items-center cursor-pointer select-none",
        "hover:text-text-100 transition-colors ease-in-out duration-300",
        className
      )}
      href={href}
      target="_blank"
    >
      <span className="w-full flex gap-3 items-center">
        {props.Icon && <props.Icon className="w-4" />}
        <p className="">{props.title}</p>
      </span>
      <ExternalLink className="w-4" />
    </a>
  );
}
