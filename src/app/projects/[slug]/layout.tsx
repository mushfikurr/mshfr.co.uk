import { cn } from "@/utils/utils";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        "prose",
        "prose-h1:text-3xl prose-h1:font-semibold prose-h1:tracking-tight prose-h1:text-text-100 prose-h1:my-12",
        "prose-h2:font-semibold prose-h2:text-text-100 prose-h2:text-base",
        "prose-h3:font-medium prose-h3:text-text-200 prose-h3:text-base",
        "prose-h5:text-text-100 prose-h5:font-normal prose-h5:text-base prose-h5:tracking-normal",
        "prose-p:text-text-300 prose-p:leading-relaxed prose-p:font-normal prose-p:text-base",
        "prose-strong:font-semibold prose-strong:text-text-200"
      )}
    >
      {children}
    </div>
  );
}
