import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../utils/utils";
import { IconLink } from "./ui/IconLink";

export const LandingSection: React.FC = () => {
  return (
    <div className="space-y-12 relative">
      <div className="text-center space-y-4">
        <div className="highlight -z-50"></div>

        <h1 className="text-4xl tracking-tighter font-bold inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hi, I'm Mushfikur.
        </h1>
        <h1 className="text-lg max-w-lg text-text-100">
          A full-stack, London based developer passionate about crafting refined
          software <span className="text-text-400">(and music)</span>
        </h1>
      </div>

      <ContactLinks />
    </div>
  );
};

interface ContactLinksProps extends React.ComponentPropsWithoutRef<"div"> {}
export const ContactLinks: React.FC<ContactLinksProps> = ({
  className,
  ...props
}: ContactLinksProps) => {
  return (
    <div
      className={cn("flex items-center justify-center w-full gap-3", className)}
      {...props}
    >
      <IconLink
        Icon={Github}
        href="https://github.com/mushfikurr"
        target="_blank"
      />
      <IconLink
        Icon={Linkedin}
        href="https://www.linkedin.com/in/mushfikur-rahman-832855201/"
        target="_blank"
      />
      <IconLink
        Icon={Mail}
        href="mailto:mushfikur0@gmail.com"
        target="_blank"
      />
    </div>
  );
};
