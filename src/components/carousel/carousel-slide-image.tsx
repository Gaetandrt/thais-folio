import Image from "next/image";

interface CarouselSlideImageProps {
  src: string;
  alt: string;
  isPriority?: boolean;
}

export function CarouselSlideImage({
  src,
  alt,
  isPriority = false,
}: CarouselSlideImageProps) {
  return (
    <div className="relative min-w-[478px] h-[790px]">
      <Image
        className="rounded-[224px] shadow-lg object-cover transition-opacity duration-500"
        src={src}
        fill={true}
        alt={alt}
        priority={isPriority}
      />
    </div>
  );
}
