import { LucideIcon } from "lucide-react";
import { cn } from "../utils/utils";

interface PrimaryButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "group cursor-pointer px-6 py-3 bg-secondary-500 text-text-100 border-text-100/5 rounded-md text-xs font-medium",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
