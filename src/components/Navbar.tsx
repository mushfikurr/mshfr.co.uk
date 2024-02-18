import { useState } from "react";
import { cn } from "../utils/utils";

interface Link {
  href?: string;
  text?: React.ReactNode;
}

const links: Link[] = [
  { href: "#home", text: "Home" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<Link>(links[0]);

  const handleNavbarItemClick = (currentLink: Link) => {
    setActive(currentLink);
  };

  const isItemActive = (currentLink: Link) => currentLink.href === active.href;

  return (
    <ul className="top-3 fixed flex gap-6 justify-center w-full z-50 text-text-100/40 font-medium bg-background-950/80 backdrop-blur-md py-6">
      {links.map((link: Link) => (
        <NavbarItem
          link={link}
          active={isItemActive(link)}
          key={link.href}
          onClick={() => handleNavbarItemClick(link)}
        />
      ))}
    </ul>
  );
}

interface NavbarItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  link: Link;
}

function NavbarItem({ active, link, className, ...props }: NavbarItemProps) {
  return (
    <li
      className={cn(
        "hover:text-text-100",
        "transition-colors duration-300 ease-in-out",
        active && "text-text-100",
        className
      )}
      {...props}
    >
      <a href={link.href}>{link.text}</a>
    </li>
  );
}
