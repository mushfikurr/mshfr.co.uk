import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import useObservers from "../utils/hooks/useObservers";
import { cn } from "../utils/utils";
import { ContactForm } from "./ContactForm";
import { ContactLinks, LandingSection } from "./LandingSection";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { RecentActivity } from "./RecentActivity";
import { EmojiCallout } from "./ui/EmojiCallout";
import { IconAnchor } from "./ui/IconButton";
import { PageContainer } from "./ui/PageContainer";

export enum Page {
  Home = "Home",
  Projects = "Projects",
  Contact = "Contact",
}
export type Pages = Record<Page, React.RefObject<HTMLDivElement>>;

export function RootLayout() {
  const pages: Pages = {
    [Page.Home]: useRef<HTMLDivElement>(null),
    [Page.Projects]: useRef<HTMLDivElement>(null),
    [Page.Contact]: useRef<HTMLDivElement>(null),
  };

  const [active, setActive] = useState<Page>(Page.Home);
  useObservers({
    targetRefs: Object.values(pages),
    callback: (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pageTypeStr = entry.target.id;
          const pageType = Page[pageTypeStr as keyof typeof Page];
          if (pageType !== undefined) {
            setActive(pageType);
          }
        }
      });
    },
  });

  return (
    <div className="">
      <Navbar active={active} pages={pages} setActive={setActive} />

      <PageContainer
        className="-mt-[5.6rem]"
        forwardedRef={pages[Page.Home]}
        id="Home"
      >
        <div className="max-w-screen-xl py-24">
          <LandingSection />
        </div>
        <div className="flex flex-col gap-12 w-full h-full max-w-screen-lg grow">
          <div className="flex flex-col gap-4 grow">
            <RecentActivity />
          </div>
          <div className="flex items-center justify-center w-full">
            <IconAnchor
              Icon={ChevronDown}
              iconClassnames="h-4 w-4"
              className={cn(
                "hover:translate-y-1 hover:scale-105 hover:bg-primary/30 active:bg-secondary/80 shadow-md",
                "bg-gradient-to-br from-secondary/20 to-background/0 backdrop-blur-md border border-text-100/5"
              )}
              href={`#${Page.Projects}`}
            />
          </div>
        </div>
      </PageContainer>

      <PageContainer forwardedRef={pages[Page.Projects]} id="Projects">
        <div className="max-w-prose w-full h-full flex flex-col gap-8">
          <Projects />
        </div>
      </PageContainer>

      <PageContainer forwardedRef={pages[Page.Contact]} id="Contact">
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
