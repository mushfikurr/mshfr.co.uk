import { EmojiCallout } from "@/components/ui/EmojiCallout";

export default async function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-medium">Blog</h1>
      <EmojiCallout emoji={"🖊️"} heading="Writing is the key to understanding.">
        Recently, I&apos;ve had the urge to write down my thoughts and ideas.
        Below are some of the things I&apos;ve written about.
      </EmojiCallout>
    </div>
  );
}
