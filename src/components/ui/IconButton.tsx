import { LucideIcon } from "lucide-react";
import { cn } from "../../utils/utils";

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
        "group cursor-pointer p-2 rounded-full bg-card-950/90 backdrop-blur-md border border-text-100/5",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <Icon
        className={cn(
          "text-text group-hover:text-text group-active:text-primary-400",
          iconClassnames
        )}
        strokeWidth={1.5}
      />
    </button>
  );
};

interface IconAnchorProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon: LucideIcon;
  iconClassnames?: string;
}

export const IconAnchor: React.FC<IconAnchorProps> = ({
  className,
  Icon,
  iconClassnames,
  ...props
}: IconAnchorProps) => {
  return (
    <a
      className={cn(
        "group cursor-pointer p-2 rounded-full",
        className,
        "transition-all duration-300 ease-in-out"
      )}
      {...props}
    >
      <Icon
        className={cn(
          "text-text-100 group-hover:text-primary-500 group-active:text-primary-400",
          iconClassnames
        )}
        strokeWidth={1.5}
      />
    </a>
  );
};
