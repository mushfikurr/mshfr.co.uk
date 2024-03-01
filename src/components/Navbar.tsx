import { Cog } from "lucide-react";
import { cn } from "../utils/utils";
import { Page, Pages } from "./RootLayout";

interface NavbarProps {
  active: Page;
  setActive: React.Dispatch<React.SetStateAction<Page>>;
  pages: Pages;
}

export function Navbar({ ...props }: NavbarProps) {
  const isItemActive = (page: Page) => props.active === page;

  const renderNavbarItems = () => {
    const renderedItems = [];
    for (const key in props.pages) {
      renderedItems.push(
        <NavbarItem
          active={isItemActive(Page[key as keyof typeof Page])}
          key={key}
          href={`#${Page[key as keyof typeof Page]}`}
        >
          {key}
        </NavbarItem>
      );
    }
    return renderedItems;
  };

  return (
    <ul className="top-3 fixed flex gap-6 justify-center items-center w-full z-50 text-text-400 font-medium bg-background/90 backdrop-blur-sm py-6">
      {renderNavbarItems()}
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
        "hover:text-text-100",
        "transition-colors duration-300 ease-in-out",
        active && "text-text-100",
        className
      )}
      {...props}
    >
      <a href={href}>{children}</a>
    </li>
  );
}
