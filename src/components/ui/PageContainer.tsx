import { cn } from "../../utils/utils";

export function PageContainer({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "w-full mx-auto text-text-100 py-6 max-w-prose px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
