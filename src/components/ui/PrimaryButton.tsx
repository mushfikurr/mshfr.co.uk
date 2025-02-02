import { cn } from "../../utils/utils";

export const primaryButtonClassnames =
  "group cursor-pointer px-6 py-3 bg-gradient-to-br from-primary to-primary/90 text-secondary border border-text-100/5 rounded-md text-xs shadow-md " +
  "font-medium hover:bg-primary/85 active:bg-accent/70 transition-colors ease-in-out duration-300";

export const PrimaryButton: React.FC<React.ComponentPropsWithRef<"button">> = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<"button">) => {
  return (
    <button className={cn(primaryButtonClassnames, className)} {...props}>
      {children}
    </button>
  );
};
