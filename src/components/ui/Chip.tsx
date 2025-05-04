import { FC } from "react";
import { cn } from "../../utils/utils";

const Chip: FC<React.ComponentPropsWithoutRef<"li">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <li
      className={cn(
        "list-none cursor-pointer px-2 py-1 text-text-300 border border-text-100/5 rounded-md text-xs font-medium",
        "bg-gradient-to-br from-secondary/20 to-background/0 hover:text-text-100 hover:bg-primary/30 active:bg-secondary/80",
        "transition-colors ease-in-out duration-300",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export default Chip;
