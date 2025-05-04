import {
  LandingHeading,
  LandingIntroduction,
} from "@/components/LandingSection";
import { CustomLink } from "@/components/ui/Link";

export default async function Home() {
  return (
    <div className="max-w-prose mx-auto w-full">
      <div className="w-full pb-12">
        <LandingHeading />
      </div>

      <div className="flex flex-col gap-8 w-full grow">
        <div className="flex gap-4">
          <LandingIntroduction />
        </div>
        <div className="flex flex-col justify-between">
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
    </div>
  );
}
