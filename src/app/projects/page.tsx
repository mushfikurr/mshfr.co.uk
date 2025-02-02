import { Projects } from "@/components/Projects";
import { QUERIES } from "@/lib/db/queries";

export default async function ProjectsPage() {
  const posts = await QUERIES.getPostsByType("projects");
  return <Projects posts={posts} />;
}
