import { cn } from "../../utils/utils";

export function PageContainer({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col grow w-full h-full mx-auto text-text-100 py-6 max-w-prose px-8 md:px-0",
        className
      )}
      {...props}
    >
      <div className="flex flex-col grow items-center">{children}</div>
    </div>
  );
}
