import { ContactForm } from "@/components/ContactForm";
import {
  ContactLinks,
  LandingHeading,
  LandingIntroduction,
} from "@/components/LandingSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { EmojiCallout } from "@/components/ui/EmojiCallout";
import { IconAnchor } from "@/components/ui/IconButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { cn } from "@/utils/utils";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div>
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
              href="#Projects"
              className={cn(
                "hover:scale-110 hover:bg-primary/30 active:bg-secondary/80 shadow-md",
                "bg-gradient-to-br from-secondary/20 to-background/0 backdrop-blur-md border border-text-100/5"
              )}
            />
          </div>
        </div>
      </PageContainer>

      <PageContainer id="Projects">
        <div className="max-w-prose w-full h-full flex flex-col gap-8">
          <Projects />
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
