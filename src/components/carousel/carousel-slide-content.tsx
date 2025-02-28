import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

interface CarouselSlideContentProps {
  content: ReactNode[];
  buttonText?: string;
  direction: number;
}

/**
 * Carousel slide content component
 * Displays content with smooth animations when transitioning between slides
 */
export function CarouselSlideContent({
  content,
  buttonText,
  direction,
}: CarouselSlideContentProps) {
  const [animationDistance, setAnimationDistance] = useState(800);

  // Update animation distance based on screen height
  useEffect(() => {
    const updateAnimationDistance = () => {
      // Use screen height + 20% to ensure element fully extends beyond viewport
      const distance = Math.max(window.innerHeight * 1.2, 800);
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
      className="flex flex-col gap-10 text-5xl 2xl:w-[400px] z-20"
      initial={{
        y: effectiveDirection > 0 ? animationDistance : -animationDistance,
      }}
      animate={{ y: 0 }}
      exit={{
        y: effectiveDirection < 0 ? animationDistance : -animationDistance,
      }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      custom={direction}
    >
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {buttonText && (
        <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-pointer hover:border-none font-bold w-2/3">
          {buttonText} <MoveRight />
        </Button>
      )}
    </motion.div>
  );
}
