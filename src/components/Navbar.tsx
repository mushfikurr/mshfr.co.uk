import { Cog } from "lucide-react";
import { cn } from "../utils/utils";
import { Page, Pages } from "./RootLayout";
import Time from "./ui/Time";

interface NavbarProps {
  active: Page;
  setActive: React.Dispatch<React.SetStateAction<Page>>;
  pages: Pages;
}

export function Navbar({ ...props }: NavbarProps) {
  const isItemActive = (page: Page) => props.active === page;
  const SHOW_SETTINGS_FLAG = false; // Show the settings icon in Navbar

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
    <ul className="sticky top-0 left-0 z-10 flex gap-6 items-center w-full text-text-400 font-medium bg-background/5 backdrop-blur-sm py-6 border-b border-text-400/5">
      <div className="relative w-full flex gap-6 items-center">
        <Time />
        <div className="flex gap-6 items-center w-full justify-center">
          {renderNavbarItems()}
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
