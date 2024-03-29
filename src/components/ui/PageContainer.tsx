import { cn } from "../../utils/utils";

interface PageContainerProps extends React.ComponentPropsWithRef<"div"> {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

export function PageContainer({
  className,
  children,
  forwardedRef,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn("min-h-screen flex flex-col h-full", className)}
      ref={forwardedRef}
      {...props}
    >
      <div className="flex flex-col items-center grow pt-24 py-4 gap-10 px-14 text-text-100 max-sm:pt-20">
        {children}
      </div>
    </div>
  );
}
