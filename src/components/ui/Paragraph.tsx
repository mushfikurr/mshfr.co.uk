import { cn } from "@/utils/utils";

export default function Paragraph({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
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
