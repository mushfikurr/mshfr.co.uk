"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";

export default function BackgroundImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/img/bg-cover.png"
        alt="Background"
        fill
        quality={100}
        priority={false}
        loading="lazy"
        className={cn(
          "object-cover object-center transition-opacity duration-1000",
          "[mask-image:linear-gradient(to_top,black_0%,transparent_70%)] [mask-size:100%] [mask-repeat:no-repeat] [mask-mode:alpha]",
          imageLoaded ? "opacity-60" : "opacity-0"
        )}
        onLoadingComplete={handleImageLoad}
      />
    </div>
  );
}
