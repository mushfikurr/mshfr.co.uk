import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../utils/utils";
import { IconLink } from "./ui/IconLink";
import { Link } from "./ui/Link";

export const LandingHeading: React.FC = () => {
  return (
    <div className="space-y-8 relative animate-slide-in-300 opacity-0">
      <div className="space-y-2">
        <div className="highlight -z-50"></div>

        <h1 className="text-4xl tracking-tighter font-bold inline-block bg-gradient-to-tl from-accent to-primary bg-clip-text text-transparent">
          Hi, I'm Mushfikur.
        </h1>
        <h1 className="text-lg max-w-prose text-text-100">
          A full-stack, London based developer passionate about crafting refined
          software.
        </h1>
      </div>

      <ContactLinks />
    </div>
  );
};

export const LandingIntroduction: React.FC = () => {
  return (
    <div className="space-y-12 max-w-prose animate-slide-in-500 opacity-0">
      <div className="space-y-4 text-text-400">
        <p>
          <span className="text-text-100">
            I am passionate about creating software that feels both organic and
            purposeful.
          </span>{" "}
          My journey started and is fueled by curiosity, and a continuous
          dedication to improvement.
        </p>
        <p>
          <span className="text-text-100">
            I have worked on projects such as{" "}
            <Link href="https://github.com/mushfikurr/booking-app">Bookal</Link>
            ,{" "}
            <Link href="https://github.com/mushfikurr/videocollab">
              VideoCollab
            </Link>
            , and{" "}
            <Link href="https://github.com/mushfikurr/yt-sample-gen">
              yt-sample-gen
            </Link>
          </span>
          . I have written more about them below.
        </p>
      </div>

      <div className="space-y-4 text-text-400 animate-slide-in-700 opacity-0">
        <h3 className="font-medium text-text-100 flex items-center">Now</h3>
        <p>
          <span className="text-text-100">
            I am looking for a company to bring my expertise and passion to.
          </span>{" "}
          Alongside my journey, I continue to work on my projects, learn new
          concepts, and apply them.
        </p>
        <p>
          My current learning is focused on{" "}
          <span className="text-text-100">DevOps</span> and{" "}
          <span className="text-text-100">Networking (CCNA)</span>.
        </p>
      </div>
    </div>
  );
};

interface ContactLinksProps extends React.ComponentPropsWithoutRef<"div"> {}
export const ContactLinks: React.FC<ContactLinksProps> = ({
  className,
  ...props
}: ContactLinksProps) => {
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
