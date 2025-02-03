import { ContactForm } from "@/components/ContactForm";
import {
  ContactLinks,
  LandingHeading,
  LandingIntroduction,
} from "@/components/LandingSection";
import { EmojiCallout } from "@/components/ui/EmojiCallout";
import { CustomLink } from "@/components/ui/Link";
import { PageContainer } from "@/components/ui/PageContainer";

export default async function Home() {
  return (
    <div>
      <PageContainer className="-mt-[5.6rem]" id="Home">
        <div className="max-w-screen-sm w-full py-16 pb-8 max-sm:pt-10">
          <LandingHeading />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-screen-sm grow">
          <div className="flex gap-4">
            <LandingIntroduction />
          </div>
          <div className="flex flex-col justify-between animate-slide-in-750 opacity-0">
            <CustomLink href="/projects" className="text-sm">
              My projects
            </CustomLink>
            <CustomLink href="/blog" className="text-sm">
              Blog
            </CustomLink>
            <CustomLink href="#Contact" className="text-sm">
              Contact
            </CustomLink>
          </div>
        </div>
      </PageContainer>

      <PageContainer id="Contact">
        <div className="max-w-prose w-full h-full flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-xl font-semibold pt-8 text-text-100 tracking-tight">
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
