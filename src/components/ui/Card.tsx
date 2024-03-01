import { FC } from "react";
import { cn } from "../../utils/utils";

interface CardProps extends React.ComponentPropsWithRef<"div"> {}

export const cardClassnames =
  "bg-secondary/15 backdrop-blur-md text-text-100 rounded-md drop-shadow-sm border-text-100/5 border py-6 px-6";

const Card: FC<CardProps> = ({ className, children, ...props }: CardProps) => {
  return <div className={cn(cardClassnames, className)}>{children}</div>;
};

export default Card;
