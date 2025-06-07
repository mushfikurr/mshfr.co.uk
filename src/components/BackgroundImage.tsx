"use client";

import { cn } from "@/utils/utils";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function BackgroundImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const layout = useSelectedLayoutSegment();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Image
        src="/img/bg-cover.png"
        alt="Background"
        fill
        quality={100}
        priority
        className={cn(
          "object-cover object-center transition-[opacity,filter] duration-1000",
          "[mask-image:linear-gradient(to_top,black_0%,transparent_60%)] [mask-size:100%] [mask-repeat:no-repeat] [mask-mode:alpha]",
          imageLoaded ? "opacity-50" : "opacity-0 blur-none",
          layout === "blog" && "opacity-0 blur-none"
        )}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

