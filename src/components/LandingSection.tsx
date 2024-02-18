import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { IconLink } from "./IconLink";

export const LandingSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl tracking-tight drop-shadow-glow font-bold bg-gradient-to-r from-primary-300 to-secondary-500 inline-block text-transparent bg-clip-text">
          Hi, I'm Mushfikur.
        </h1>
        <h1 className="text-md max-w-md text-text-100/90">
          A full-stack London-based developer passionate about crafting refined
          software.
        </h1>
      </div>
      <div className="flex items-center justify-center w-full gap-3">
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
    </div>
  );
};
