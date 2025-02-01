import { PageContainer } from "@/components/ui/PageContainer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-prose w-full h-full mx-auto text-text-100 py-12 gap-8 min-h-screen">
      {children}
    </div>
  );
}
