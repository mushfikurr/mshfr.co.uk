import { LucideIcon } from "lucide-react";
import { cn } from "../../utils/utils";

export interface IconLinkProps extends React.ComponentPropsWithoutRef<"a"> {
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
          "text-text-100 group-hover:text-primary h-7 w-7 group-active:active:text-primary/70",
          "transition-colors duration-200 ease-in-out",
          iconClassnames
        )}
        strokeWidth={1.5}
      />
    </a>
  );
};
