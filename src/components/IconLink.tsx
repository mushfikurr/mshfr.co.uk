import { LucideIcon } from "lucide-react";
import { cn } from "../utils/utils";

interface IconLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon: LucideIcon;
  iconClassnames?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  className,
  Icon,
  iconClassnames = "",
  ...props
}: IconLinkProps) => {
  return (
    <a className={cn("group cursor-pointer", className)} {...props}>
      <Icon
        className={cn(
          "text-text-100 group-hover:text-primary-500 h-7 w-7 group-active:text-primary-400",
          "transition-colors duration-200 ease-in-out",
          iconClassnames
        )}
        strokeWidth={1.5}
      />
    </a>
  );
};
