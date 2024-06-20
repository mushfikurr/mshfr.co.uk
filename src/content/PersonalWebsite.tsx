import { Github } from "lucide-react";
import { ProjectCardProps } from "../components/Projects";
import { BodySubheading } from "../components/ui/BodySubheading";

export const PersonalWebsite = () => (
  <div className="space-y-3">
    <p>
      My personal website is my own little corner of the internet. I want it to
      reflect design trends that I currently really enjoy, whilst also being
      useful in demonstrating my skills. I have fallen victim to recreating my
      personal website a few times, but this time I wanted to create a system
      that can be easily edited and expanded to future projects.
    </p>
    <BodySubheading>Implementation details</BodySubheading>
    <p>
      Using React and Vite allows me to quickly prototype changes, as well as
      use the existing ecosystem to quickly implement features and components I
      may need. Using Tailwind, I am able to create a rigid design system that
      all my website can conform to, as well as allowing me to create building
      blocks that I can then combine or remove at any time.
    </p>
  </div>
);

export const personalWebsiteProps: ProjectCardProps = {
  title: "mshfr.co.uk",
  description: <PersonalWebsite />,
  summary:
    "The source code and design decisions behind my corner of the internet.",
  imgSrc: "/img/stock-application-image.png",
  links: [
    {
      Icon: Github,
      title: "View GitHub repository",
      href: "https://github.com/mushfikurr/mshfr.co.uk",
    },
  ],
  techStack: [
    { children: "React", href: "https://react.dev/" },
    { children: "Tailwind", href: "https://tailwindcss.com/" },
  ],
};
