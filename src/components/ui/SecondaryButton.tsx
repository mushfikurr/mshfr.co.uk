import { cn } from "../../utils/utils";

interface SecondaryButtonProps extends React.ComponentPropsWithRef<"button"> {}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  className,
  children,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={cn(
        "group cursor-pointer px-6 py-3 text-text-100 border border-text-100/5 rounded-md text-xs font-medium",
        "bg-gradient-to-br from-secondary/20 to-background/0 hover:bg-primary/30 active:bg-secondary/80",
        "transition-colors ease-in-out duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
