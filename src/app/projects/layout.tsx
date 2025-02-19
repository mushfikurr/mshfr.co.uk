import Breadcrumb from "@/components/ui/Breadcrumb";
import { cn } from "@/utils/utils";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        "max-w-prose w-full h-full mx-auto text-text-100 py-12 px-8 pb-24 gap-8 min-h-dvh"
      )}
    >
      <Breadcrumb parent="projects" />
      {children}
    </div>
  );
}
