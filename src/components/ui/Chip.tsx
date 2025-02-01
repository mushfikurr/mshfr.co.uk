import { FC } from "react";
import { cn } from "../../utils/utils";

interface ChipProps extends React.ComponentPropsWithoutRef<"a"> {}

const Chip: FC<ChipProps> = ({ className, children, ...props }) => {
  return (
    <a
      className={cn(
        className,
        "cursor-pointer px-3 py-1 text-text-300 border border-text-100/5 rounded-lg text-xs font-medium",
        "bg-gradient-to-br from-secondary/20 to-background/0 hover:text-text-100 hover:bg-primary/30 active:bg-secondary/80",
        "transition-colors ease-in-out duration-300"
      )}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
};

export default Chip;
