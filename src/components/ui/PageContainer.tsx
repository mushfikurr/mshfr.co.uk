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
      <div className="flex flex-col items-center grow pt-20 py-8 gap-10 px-14 text-text-100">
        {children}
      </div>
    </div>
  );
}
