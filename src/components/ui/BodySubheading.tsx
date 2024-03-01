import { cn } from "../../utils/utils";

interface BodySubheadingProps extends React.ComponentPropsWithoutRef<"h5"> {}

export const BodySubheading = ({
  children,
  className,
  ...props
}: BodySubheadingProps) => (
  <h5 className={cn("font-semibold text-text-300", className)} {...props}>
    {children}
  </h5>
);
