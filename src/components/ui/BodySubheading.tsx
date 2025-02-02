import { cn } from "../../utils/utils";

export const BodySubheading = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h5">) => (
  <h5 className={cn("font-semibold text-text-200", className)} {...props}>
    {children}
  </h5>
);
