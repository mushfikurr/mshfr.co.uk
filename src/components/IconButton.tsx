import { LucideIcon } from "lucide-react";
import { cn } from "../utils/utils";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  Icon: LucideIcon;
  iconClassnames?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  Icon,
  iconClassnames = "",
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "group cursor-pointer p-2 rounded-full bg-card-950 border border-text-100/5 hover:bg-text-100/5",
        className
      )}
      {...props}
    >
      <Icon
        className={cn(
          "text-text-100 group-hover:text-primary-500 group-active:text-primary-400",
          "transition-colors duration-200 ease-in-out",
          iconClassnames
        )}
        strokeWidth={1.5}
      />
    </button>
  );
};
