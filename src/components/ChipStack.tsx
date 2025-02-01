import { cn } from "@/utils/utils";
import Chip from "./ui/Chip";

interface Item {
  children: React.ReactNode;
  href: string;
}

interface ChipStackProps extends React.ComponentPropsWithoutRef<"div"> {
  stack: Item[];
}

export default function ChipStack({
  stack,
  className,
  ...props
}: ChipStackProps) {
  return (
    <div
      className={cn("flex gap-2 gap-y-2 flex-wrap w-full", className)}
      {...props}
    >
      {stack.map((s) => (
        <Chip {...s} />
      ))}
    </div>
  );
}
