import Image, { ImageProps as NextImageProps } from "next/image";

interface HeaderImageProps extends NextImageProps {
  alt: string;
}

export const HeaderImage = ({ src, alt, ...rest }: HeaderImageProps) => {
  return (
    <div className="relative w-full h-auto not-prose">
      <div
        className="w-full h-auto overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={1200}
          height={600}
          priority
          placeholder="blur"
          className="rounded-md drop-shadow-lg"
          {...rest}
        />
      </div>
    </div>
  );
};
