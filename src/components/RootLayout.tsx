import { ChevronDown } from "lucide-react";
import { cn } from "../utils/utils";
import { ContactForm } from "./ContactForm";
import {
  ContactLinks,
  LandingHeading,
  LandingIntroduction,
} from "./LandingSection";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { EmojiCallout } from "./ui/EmojiCallout";
import { IconAnchor } from "./ui/IconButton";
import { PageContainer } from "./ui/PageContainer";
import { QUERIES } from "@/lib/db/queries";

export enum Page {
  Home = "Home",
  Projects = "Projects",
  Contact = "Contact",
}
export type Pages = Record<Page, React.RefObject<HTMLDivElement>>;

export async function RootLayout() {
  const projects = await QUERIES.getPostsByType("projects");
  return (
    <div className="">
      <Navbar />

      <PageContainer className="-mt-[5.6rem]" id="Home">
        <div className="max-w-screen-sm w-full py-24 pb-8 max-sm:pt-10">
          <LandingHeading />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-screen-sm grow">
          <div className="flex gap-4 grow">
            <LandingIntroduction />
          </div>
          <div className="flex items-center justify-center w-full">
            <IconAnchor
              Icon={ChevronDown}
              iconClassnames="h-4 w-4"
              className={cn(
                "hover:scale-110 hover:bg-primary/30 active:bg-secondary/80 shadow-md",
                "bg-gradient-to-br from-secondary/20 to-background/0 backdrop-blur-md border border-text-100/5"
              )}
              href={`#${Page.Projects}`}
            />
          </div>
        </div>
      </PageContainer>

      <PageContainer id="Projects">
        <div className="max-w-prose w-full h-full flex flex-col gap-8">
          <Projects posts={projects} />
        </div>
      </PageContainer>

      <PageContainer id="Contact">
        <div className="max-w-prose w-full h-full flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold pt-8 text-text-100 tracking-tight">
                  Contact
                </h1>
                <EmojiCallout
                  emoji={"👋"}
                  heading="I'm currently looking for work."
                >
                  If you are interested, or just want to say hello, fill out the
                  form below, or connect with me using one of the links.
                </EmojiCallout>
              </div>

              <ContactLinks className="justify-start" />
            </div>

            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
