import { cn } from "../../utils/utils";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export const Link: React.FC<LinkProps> = ({
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn(
        "group cursor-pointer underline decoration-1 underline-offset-1 text-text-200 hover:text-text-100 transition duration-300 ease-in-out",
        className
      )}
      target={props.target ?? "_blank"}
      {...props}
    >
      {props.children}
    </a>
  );
};
