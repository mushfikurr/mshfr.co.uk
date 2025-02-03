import { cn } from "@/utils/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export const CustomLink = ({
  children,
  className,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) => {
  const isExternal = href.startsWith("http");

  const LinkComponent = isExternal ? "a" : Link;

  return (
    <LinkComponent
      href={href}
      className={cn(
        "font-medium text-sm text-text-300 hover:text-text-200 active:text-text-100 transition-colors duration-300 ease-in-out flex gap-1.5 items-center group py-1 md:py-0.5",
        className
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <ChevronRight
        strokeWidth={3}
        className="text-text-400 group-hover:text-text-300 transition-colors duration-300 ease-in-out h-3 w-3 mt-[2px] mr-0"
      />
      {children}
      <ArrowRight
        className="h-3 w-3 text-text-300 group-hover:text-text-200 transition-all -translate-x-1 group-hover:translate-x-1 duration-300 ease-in-out opacity-0 group-hover:opacity-100 mt-0.5"
        strokeWidth={3}
      />
    </LinkComponent>
  );
};
