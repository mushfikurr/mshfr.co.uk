import { Github, Globe } from "lucide-react";
import { ProjectCardProps } from "../components/Projects";
import { BodySubheading } from "../components/ui/BodySubheading";
import { Link } from "../components/ui/Link";

export const BookalContent = () => (
  <div className="space-y-3">
    <p>
      Bookal is a booking platform built with local businesses in mind. It
      started with my realisation that some smaller businesses do not have
      access to more modern infrastructure for online booking, and instead
      handle this all manually. With the advancement of technology, and the
      capacity to meet these needs to drive customer interaction and make the
      process more streamlined, I set out to build Bookal. Bookal features full
      control for businesses to customise their page and opening hours, and
      allows users full transparency for booking in convenient slots.
    </p>
    <BodySubheading>Implementation details</BodySubheading>
    <p>
      The <Link href="https://ui.shadcn.com/">shadcn/ui</Link> library heavily
      influenced the design, and the pages were built wireframes-first based on
      how a user might interact with every page. Wireframes and designs were
      created in Figma, then individual components were built based on this
      design file.
    </p>
    <p>
      Using <Link href="https://nextjs.org/">Next.js</Link> and an ORM like{" "}
      <Link href="https://www.prisma.io/">Prisma</Link> allowed me to iterate
      quickly, allowing me to quickly converge towards an MVP as fast as
      possible. I believe this is due to the component-based composability of{" "}
      <Link href="https://react.dev/">React</Link>, and the fact you can isolate
      and test each component before piecing them together. Additionally, the
      vast ecosystem allowed me to use existing libraries to do certain things
      that can become quite complicated and provide me with an easier
      abstraction to work with. This allowed me to be nimble and introduce more
      features without spending time reinventing the wheel. An example of this
      is the <Link href="https://next-auth.js.org/">Next-Auth</Link> library,
      which allowed me to roll my authentication as well as allow{" "}
      <Link href="https://developers.google.com/identity/protocols/oauth2">
        Google’s OAuth
      </Link>{" "}
      for authentication.
    </p>
  </div>
);

export const bookalProps: ProjectCardProps = {
  title: "Bookal: A Booking App For Local Businesses",
  description: <BookalContent />,
  summary:
    "A fully-featured booking platform that allows local businesses to create, manage, and share their business with customers.",
  imgSrc: "/img/stock-application-image.png",
  links: [
    { Icon: Github, title: "View GitHub repository" },
    { Icon: Globe, title: "View live website" },
  ],
  techStack: [
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
    { Icon: Github, title: "GitHub" },
  ],
};
