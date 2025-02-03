import { LucideIcon, Link as LinkIcon } from "lucide-react";
import { TextLink } from "./ui/TextLink";

interface AnchorExternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon?: LucideIcon;
  title: string;
}

export function AnchorExternalLink({
  href,
  Icon = LinkIcon,
  ...props
}: AnchorExternalLinkProps) {
  return (
    <TextLink href={href} target="_blank" {...props}>
      <span className="w-full flex gap-2.5 items-center text-sm">
        {Icon && <Icon className="w-4" />}
        {props.title}
      </span>
    </TextLink>
  );
}
