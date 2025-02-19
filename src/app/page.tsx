import {
  LandingHeading,
  LandingIntroduction,
} from "@/components/LandingSection";
import { CustomLink } from "@/components/ui/Link";
import { PageContainer } from "@/components/ui/PageContainer";

export default async function Home() {
  return (
    <div>
      <PageContainer className="-mt-[5.6rem] pb-24" id="Home">
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
            <CustomLink href="/contact" className="text-sm">
              Contact
            </CustomLink>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
