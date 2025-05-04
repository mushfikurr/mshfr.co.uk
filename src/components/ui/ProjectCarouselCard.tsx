import Image from "next/image";
import { CustomLink } from "./Link";

export function ProjectCarouselCard() {
  return (
    <div className="flex flex-col border border-text-100/5 rounded-md overflow-clip h-full">
      <div className="relative grow">
        <Image
          src="/img/velvara-screenshot.png"
          alt="Velvara screenshot"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="bg-card space-y-6 py-8 p-6 flex items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-text-100 font-semibold tracking-tight leading-[1.1] text-lg">
              Velvara E-Commerce
            </h1>
            <p className="text-text-300 line-clamp-2 max-sm:line-clamp-none">
              A self-hosted, headless e-commerce platform for premium perfume
              oils, built with Medusa.js, Next.js, and Stripe.
            </p>
          </div>

          <div className="flex flex-col">
            <CustomLink href="/projects" className="text-sm">
              Visit website
            </CustomLink>
            <CustomLink href="/projects" className="text-sm">
              Read blog post
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
