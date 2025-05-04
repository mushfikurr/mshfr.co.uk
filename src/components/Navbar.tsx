"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "../utils/utils";

const pages = [
  { name: "Me", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const segments = useSelectedLayoutSegments();
  const [hash, setHash] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 64) {
        setShowNavbar(false); // hide when scrolling down
      } else {
        setShowNavbar(true); // show when scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isItemActive = (href: string) => {
    const normalizedHref = href.replace(/^\/+|\/+$/g, "");

    if (href.startsWith("#")) {
      return hash === href;
    }

    if (normalizedHref === "") {
      return segments.length === 0;
    }

    return segments.join("/").startsWith(normalizedHref);
  };

  return (
    <ul
      className={cn(
        "sticky top-0 left-0 z-10 w-full text-text-400 font-medium bg-gradient-to-b from-background to-transparent backdrop-blur-lg pt-12 pb-4 transition-transform duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center justify-between relative w-full max-w-prose mx-auto px-1.5">
        <Link
          href="/"
          className="tracking-tighter bg-gradient-to-tl from-accent text-lg to-primary bg-clip-text text-transparent font-semibold leading-[1.1]"
        >
          mshfr
        </Link>
        <div className="flex items-center justify-end gap-3 text-sm">
          {pages.map((p) => (
            <NavbarItem
              active={isItemActive(p.href)}
              key={p.name}
              href={p.href}
            >
              {p.name}
            </NavbarItem>
          ))}
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
      <Link href={href}>{children}</Link>
    </li>
  );
}
