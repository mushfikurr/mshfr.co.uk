import Image, { ImageProps as NextImageProps } from "next/image";

interface HeaderImageProps extends NextImageProps {
  alt: string;
}

export const HeaderImage = ({ src, alt, ...rest }: HeaderImageProps) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden w-full min-h-64">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="absolute top-0 left-0 rounded-lg drop-shadow-lg"
        {...rest}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background/40 via-transparent to-transparent" />
    </div>
  );
};
