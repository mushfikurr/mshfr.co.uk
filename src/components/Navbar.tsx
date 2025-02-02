"use client";

import { Cog } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";
import { cn } from "../utils/utils";
import Time from "./ui/Time";

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export function Navbar({ ...props }) {
  const segments = useSelectedLayoutSegments();

  const isItemActive = (href: string) => {
    // Normalize the href by removing leading and trailing slashes
    const normalizedHref = href.replace(/^\/+|\/+$/g, "");

    // Handle the case for the root path "/"
    if (normalizedHref === "") {
      // For the root path, check if segments are empty (root of the site)
      return segments.length === 0;
    }

    // For other paths, check if the first segment matches
    // Make sure to join the segments and check if it starts with the href
    return segments.join("/").startsWith(normalizedHref);
  };

  const SHOW_SETTINGS_FLAG = false;

  return (
    <ul className="sticky top-0 left-0 z-10 flex items-center w-full text-text-400 font-medium bg-background/5 backdrop-blur-sm py-8 border-b border-text-400/5">
      <div className="relative w-full flex items-center justify-between">
        {/* Left: Time */}
        <div className="flex items-center">
          <Time />
        </div>

        {/* Center: Navbar Items */}
        <div className="absolute flex justify-center items-center w-full">
          <div className="max-w-screen-md">
            <div className="flex gap-6 max-w-screen-sm">
              {pages.map((p) => {
                return (
                  <NavbarItem
                    active={isItemActive(p.href)}
                    key={p.name}
                    href={p.href}
                  >
                    {p.name}
                  </NavbarItem>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Settings */}
        <div className="flex items-center">
          {SHOW_SETTINGS_FLAG && (
            <li
              className={cn(
                "hover:text-text-100 inline-flex items-center",
                "transition-colors duration-300 ease-in-out"
              )}
            >
              <button>
                <Cog className="h-6 hover:rotate-90 transition-transform ease-in-out duration-500" />
              </button>
            </li>
          )}
        </div>
      </div>
    </ul>
  );
}

interface NavbarItemProps extends React.ComponentPropsWithoutRef<"li"> {
  active?: boolean;
  href: string;
}

function NavbarItem({
  active,
  href,
  className,
  children,
  ...props
}: NavbarItemProps) {
  return (
    <li
      className={cn(
        "peer hover:text-text-100",
        "transition-all duration-300 ease-in-out",
        active && "text-text-100 drop-shadow-glow",
        className
      )}
      {...props}
    >
      <a href={href}>{children}</a>
    </li>
  );
}
