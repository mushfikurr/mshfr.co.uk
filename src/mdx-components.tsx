import type { MDXComponents } from "mdx/types";
import { Link } from "./components/ui/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => <Link {...props}>{children}</Link>,
    ...components,
    p: ({ children }) => (
      <p className="hover:text-text-200 transition-colors ease-in-out duration-700">
        {children}
      </p>
    ),
  };
}
