import { cn } from "../../utils/utils";

export const TextLink: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) => {
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
