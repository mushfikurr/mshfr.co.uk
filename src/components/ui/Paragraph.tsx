import { cn } from "@/utils/utils";

interface ParagraphProps extends React.ComponentPropsWithoutRef<"p"> {}

export default function Paragraph({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-text-300 leading-relaxed hover:text-text-200 transition-colors ease-in-out duration-700",
        className
      )}
      {...props}
    />
  );
}
