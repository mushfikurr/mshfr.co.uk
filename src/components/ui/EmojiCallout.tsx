import { cn } from "../../utils/utils";

interface EmojiCallout extends React.ComponentPropsWithoutRef<"p"> {
  emoji: React.ReactNode;
  heading: React.ReactNode;
}

export function EmojiCallout({
  emoji,
  heading,
  className,
  ...props
}: EmojiCallout) {
  return (
    <div className="w-full max-w-prose flex gap-4">
      <p>{emoji}</p>
      <p className={cn("text-text-300", className)} {...props}>
        <span className="text-text-100">{heading}</span> {props.children}
      </p>
    </div>
  );
}
