import { Projects } from "@/components/Projects";
import { getRepoStars } from "@/lib/github/stars";

export default async function ProjectsPage() {
  const overlineStars = await getRepoStars("overline-zebar");
  return <Projects overlineStars={overlineStars} />;
}
