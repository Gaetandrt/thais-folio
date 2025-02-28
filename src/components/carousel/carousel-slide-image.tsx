import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselSlideImageProps {
  src: string;
  alt: string;
  isPriority?: boolean;
  direction: number;
}

export function CarouselSlideImage({
  src,
  alt,
  isPriority = false,
  direction,
}: CarouselSlideImageProps) {
  const [animationDistance, setAnimationDistance] = useState(1200);

  // Update animation distance based on screen width
  useEffect(() => {
    const updateAnimationDistance = () => {
      // Use screen width + 20% to ensure element fully extends
      const distance = Math.max(window.innerWidth, 1200);
      setAnimationDistance(distance);
    };

    updateAnimationDistance();

    window.addEventListener("resize", updateAnimationDistance);
    return () => window.removeEventListener("resize", updateAnimationDistance);
  }, []);

  // Ensure direction is always defined, even if it's 0
  const effectiveDirection = direction === 0 ? 1 : direction;

  return (
    <motion.div
      className="relative min-w-[478px] h-[790px] z-20"
      initial={{
        x: effectiveDirection > 0 ? -animationDistance : animationDistance,
      }}
      animate={{ x: 0 }}
      exit={{
        x: effectiveDirection < 0 ? -animationDistance : animationDistance,
      }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      custom={direction}
    >
      <Image
        className="rounded-[224px] shadow-lg object-cover"
        src={src}
        fill={true}
        alt={alt}
        priority={isPriority}
      />
    </motion.div>
  );
}
