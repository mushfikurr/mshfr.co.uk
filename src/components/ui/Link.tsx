import { LucideIcon } from "lucide-react";
import { cn } from "../../utils/utils";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export const Link: React.FC<LinkProps> = ({
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn(
        "group cursor-pointer text-text-100 hover:text-primary transition duration-300 ease-in-out",
        className
      )}
      target={props.target ?? "_blank"}
      {...props}
    >
      {props.children}
    </a>
  );
};
