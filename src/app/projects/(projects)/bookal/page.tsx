import { AnchorExternalLink } from "@/components/AnchorExternalLink";
import ChipStack from "@/components/ChipStack";
import { BodySubheading } from "@/components/ui/BodySubheading";
import { IconButton } from "@/components/ui/IconButton";
import { IconLink } from "@/components/ui/IconLink";
import { Link } from "@/components/ui/Link";
import Paragraph from "@/components/ui/Paragraph";
import { Copy, Link as LinkIcon } from "lucide-react";

const technologies = [
  { children: "React", href: "https://react.dev/" },
  { children: "Next.js", href: "https://react.dev/" },
  { children: "Next-Auth", href: "https://next-auth.js.org/" },
  { children: "Tailwind", href: "https://tailwindcss.com/" },
  { children: "MySQL", href: "https://www.mysql.com/" },
  { children: "React-Query", href: "https://tanstack.com/query/v3/" },
  { children: "shadcn/ui", href: "https://ui.shadcn.com/" },
];

export default function Bookal() {
  return (
    <section className="space-y-8">
      <div className="space-y-5">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-semibold tracking-tight">Bookal</h1>
          {/* <IconButton Icon={Copy}>Test</IconButton> */}
        </div>

        <AnchorExternalLink title="View live website" Icon={LinkIcon} />
        <ChipStack stack={technologies} />
      </div>

      <div className="w-full h-[1px] bg-text-300/10 rounded-lg" />

      <div className="space-y-8 text-text-300">
        <Paragraph>
          <span className="text-text-100">
            Bookal is a booking platform built with local businesses in mind.
          </span>{" "}
          It started with my realisation that some smaller businesses do not
          have access to more modern infrastructure for online booking, and
          instead handle this all manually.
        </Paragraph>
        <Paragraph>
          With the advancement of technology, and the capacity to meet these
          needs to drive customer interaction and make the process more
          streamlined, I set out to build Bookal. Bookal features full control
          for businesses to customise their page and opening hours, and allows
          users full transparency for booking in convenient slots.
        </Paragraph>
        <BodySubheading>Implementation details</BodySubheading>
        <Paragraph>
          The <Link href="https://ui.shadcn.com/">shadcn/ui</Link> library
          heavily influenced the design, and the pages were built
          wireframes-first based on how a user might interact with every page.
          Wireframes and designs were created in Figma, then individual
          components were built based on this design file.
        </Paragraph>
        <Paragraph>
          Using <Link href="https://nextjs.org/">Next.js</Link> and an ORM like{" "}
          <Link href="https://www.prisma.io/">Prisma</Link> allowed me to
          iterate quickly, allowing me to quickly converge towards an MVP as
          fast as possible. I believe this is due to the component-based
          composability of <Link href="https://react.dev/">React</Link>, and the
          fact you can isolate and test each component before piecing them
          together. Additionally, the vast ecosystem allowed me to use existing
          libraries to do certain things that can become quite complicated and
          provide me with an easier abstraction to work with. This allowed me to
          be nimble and introduce more features without spending time
          reinventing the wheel. An example of this is the{" "}
          <Link href="https://next-auth.js.org/">Next-Auth</Link> library, which
          allowed me to roll my authentication as well as allow{" "}
          <Link href="https://developers.google.com/identity/protocols/oauth2">
            Google’s OAuth
          </Link>{" "}
          for authentication.
        </Paragraph>
      </div>
    </section>
  );
}
