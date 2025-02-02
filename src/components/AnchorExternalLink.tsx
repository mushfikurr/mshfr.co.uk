import { LucideIcon, Link as LinkIcon } from "lucide-react";
import { Link } from "./ui/Link";

interface AnchorExternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon?: LucideIcon;
  title: string;
}

export function AnchorExternalLink({
  className,
  href,
  Icon = LinkIcon,
  ...props
}: AnchorExternalLinkProps) {
  return (
    <Link href={href} target="_blank" {...props}>
      <span className="w-full flex gap-2.5 items-center text-sm">
        {Icon && <Icon className="w-4" />}
        {props.title}
      </span>
    </Link>
  );
}
