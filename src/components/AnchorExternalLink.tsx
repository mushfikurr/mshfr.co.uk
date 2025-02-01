import { cn } from "@/utils/utils";
import { ExternalLink, LucideIcon } from "lucide-react";

interface AnchorExternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon?: LucideIcon;
  title: string;
}

export function AnchorExternalLink({
  className,
  href,
  ...props
}: AnchorExternalLinkProps) {
  return (
    <a
      className={cn(
        "text-sm w-full text-start flex items-center cursor-pointer select-none text-text-300",
        "hover:text-text-100 transition-colors ease-in-out duration-300",
        className
      )}
      href={href}
      target="_blank"
    >
      <span className="w-full flex gap-2.5 items-center">
        {props.Icon && <props.Icon className="w-4" />}
        <p className="">{props.title}</p>
      </span>
    </a>
  );
}
