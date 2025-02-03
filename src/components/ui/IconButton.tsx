import { LucideIcon } from "lucide-react";
import { cn } from "../../utils/utils";
import Link from "next/link";

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
  href: string;
  iconClassnames?: string;
}

export const IconAnchor: React.FC<IconAnchorProps> = ({
  className,
  Icon,
  iconClassnames,
  href,
  ...props
}: IconAnchorProps) => {
  return (
    <Link
      className={cn(
        "group cursor-pointer rounded-full flex items-center gap-2 text-xs py-2 pl-3",
        className,
        "transition-all duration-300 ease-in-out"
      )}
      href={href}
      {...props}
    >
      <Icon
        className={cn(
          "text-text-400 group-hover:text-text-200 group-active:text-text-100 transition-colors ease-in-out duration-300",
          iconClassnames
        )}
        strokeWidth={3.5}
      />
      <div className="pr-3 font-medium">{props.children}</div>
    </Link>
  );
};
