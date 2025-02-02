"use client";

import { cn } from "@/utils/utils";
import { ChevronRight } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";
import { NextLink } from "./NextLink";

export default function Breadcrumb({ parent }: { parent?: string }) {
  const segments = useSelectedLayoutSegments();
  if (parent) segments.unshift(parent);

  if (!segments.length || segments.length === 1) return null;
  return (
    <div className="flex gap-2 items-center text-sm font-medium">
      {segments.map((segment, index) => {
        const segmentWithoutWildcards = segment
          ?.replace("(", "")
          ?.replace(")", "");
        const relativeOrAbsoluteHref =
          index === 0 ? `/${segmentWithoutWildcards}` : segmentWithoutWildcards;
        return (
          <span key={segment} className="flex gap-2 items-center leading-none">
            <NextLink
              href={relativeOrAbsoluteHref}
              className={cn(
                segments.length - 1 === index &&
                  "text-text-100 drop-shadow-glow",
                segments.length - 1 !== index && "first-letter:uppercase",
                "no-underline "
              )}
            >
              {segmentWithoutWildcards}
            </NextLink>
            {index !== segments.length - 1 && (
              <ChevronRight className="h-4 w-4 text-text-300" />
            )}
          </span>
        );
      })}
    </div>
  );
}
