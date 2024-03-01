import React, { useRef, useEffect, useState, Dispatch } from "react";
import { cn } from "../../utils/utils";

interface RevealableProps extends React.ComponentPropsWithRef<"div"> {
  initialDisplayedContent: React.ReactNode;
  expanded: boolean;
  setExpanded: React.SetStateAction<Dispatch<boolean>>;
}

export function Revealable({
  className,
  initialDisplayedContent,
  expanded,
  setExpanded,
  ...props
}: RevealableProps) {
  const visibleRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [visibleHeight, setVisibleHeight] = useState<number | null>(null);
  const [hiddenHeight, setHiddenHeight] = useState<number | null>(null);

  useEffect(() => {
    if (visibleRef.current) {
      const height = visibleRef.current.offsetHeight;
      setVisibleHeight(height);
    }
    if (hiddenRef.current) {
      const height = hiddenRef.current.scrollHeight;
      setHiddenHeight(height);
    }
  }, [initialDisplayedContent, props.children]);

  return (
    <div
      className={cn(
        "overflow-hidden",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
      style={{
        maxHeight: expanded
          ? `${(visibleHeight ?? 0) + (hiddenHeight ?? 0) + 100}px`
          : `${visibleHeight}px`,
      }}
    >
      <div ref={visibleRef} className={cn(className)}>
        {initialDisplayedContent}
      </div>
      <div
        ref={hiddenRef}
        className={cn(
          "opacity-0 invisible",
          expanded && "opacity-100 visible",
          "transition-all duration-300 ease-in-out",
          className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
