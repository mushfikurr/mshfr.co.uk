import { cn } from "../../utils/utils";

export function PageContainer({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("min-h-screen flex flex-col h-full", className)}
      {...props}
    >
      <div className="flex flex-col items-center grow pt-24 py-4 gap-10 px-8 text-text-100 max-sm:pt-20">
        {children}
      </div>
    </div>
  );
}
