import type { MDXComponents } from "mdx/types";
import { TextLink } from "./components/ui/TextLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => <TextLink {...props}>{children}</TextLink>,
    ...components,
    p: ({ children }) => (
      <p className="hover:text-text-200 transition-colors ease-in-out duration-700">
        {children}
      </p>
    ),
  };
}
