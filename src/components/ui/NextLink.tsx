import Link from "next/link";
import { cn } from "../../utils/utils";

export interface NextLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
}

export const NextLink: React.FC<NextLinkProps> = ({
  className,
  href,
  ...props
}: NextLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group cursor-pointer underline decoration-1 underline-offset-1 text-text-300 hover:text-text-100 transition duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
};
