import { cn, isExternalLink } from "../../utils/utils";
import Link from "next/link";

export const TextLink: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  className,
  href,
  target,
  rel,
  children,
  ...props
}) => {
  const external = isExternalLink(href);

  const linkClassName = cn(
    "group cursor-pointer underline decoration-1 underline-offset-1 text-text-200 hover:text-text-100 transition duration-300 ease-in-out",
    className
  );

  if (external) {
    return (
      <a
        href={href ?? ""}
        className={linkClassName}
        target={target ?? "_blank"}
        rel={rel ? `${rel} noopener noreferrer` : "noopener noreferrer"}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href ?? ""}
      className={linkClassName}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};
