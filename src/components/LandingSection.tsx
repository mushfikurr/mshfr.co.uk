import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../utils/utils";
import { IconLink } from "./ui/IconLink";

export const LandingHeading: React.FC = () => {
  return (
    <div className="space-y-8 relative">
      <div className="space-y-2">
        <h1 className="text-3xl tracking-tighter font-bold inline-block bg-gradient-to-tl from-accent to-primary bg-clip-text text-transparent">
          {"Hi, I'm Mushfikur."}
        </h1>
        <h1 className="text-base max-w-prose text-text-100">
          A full-stack, London based developer. Advocate of great design and
          experiences.
        </h1>
      </div>

      <ContactLinks />
    </div>
  );
};

export const LandingIntroduction: React.FC = () => {
  return (
    <div className="space-y-8 max-w-prose text-base">
      <div className=" text-text-300">
        <p>
          <span className="text-text-100">
            I enjoy TypeScript, React, and Next.js.
          </span>{" "}
          Tinker with everything web whilst also exploring other areas. Desktop
          applications, audio programming, basically anything that helps me
          solve the problems I face.
        </p>
      </div>

      <div className="space-y-6 text-text-300">
        <h3 className="font-medium text-text-100 flex items-center">Now</h3>
        <p>
          <span className="text-text-100">
            I am looking for a company to bring my expertise and passion to.
          </span>{" "}
          Alongside my journey, I continue to work on my projects, learn new
          concepts, and apply them.
        </p>
      </div>
    </div>
  );
};

export const ContactLinks: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex items-center w-full gap-3", className)} {...props}>
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
