"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { AnchorExternalLink } from "./AnchorExternalLink";
import { Divider } from "./ui/Divider";
import { HeaderImage } from "./ui/HeaderImage";
import { CustomLink } from "./ui/Link";

interface MDXContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

const MDXContent: React.FC<MDXContentProps> = ({ mdxSource }) => {
  const components = useMDXComponents({
    AnchorExternalLink,
    Divider,
    HeaderImage,
    CustomLink,
  });

  return <MDXRemote {...mdxSource} components={components} />;
};

export default MDXContent;
