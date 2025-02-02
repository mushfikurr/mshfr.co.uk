"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { AnchorExternalLink } from "./AnchorExternalLink";
import { Divider } from "./ui/Divider";
import { HeaderImage } from "./ui/HeaderImage";

interface MDXContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

const MDXContent: React.FC<MDXContentProps> = ({ mdxSource }) => {
  const components = useMDXComponents({
    AnchorExternalLink,
    Divider,
    HeaderImage,
  });

  return <MDXRemote {...mdxSource} components={components} />;
};

export default MDXContent;
