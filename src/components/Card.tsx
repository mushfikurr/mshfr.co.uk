import { FC } from "react";
import { cn } from "../utils/utils";

interface CardProps extends React.ComponentPropsWithRef<"div"> {}

const Card: FC<CardProps> = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-card-950 text-text-100 rounded-md drop-shadow-sm border-text-100/5 border py-6 px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
