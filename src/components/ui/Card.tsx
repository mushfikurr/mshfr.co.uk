import { FC } from "react";
import { cn } from "../../utils/utils";

export const cardClassnames =
  "bg-secondary/15 backdrop-blur-md text-text-100 rounded-md drop-shadow-sm border-text-100/5 border py-6 px-6";

const Card: FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<"div">) => {
  return (
    <div className={cn(cardClassnames, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
