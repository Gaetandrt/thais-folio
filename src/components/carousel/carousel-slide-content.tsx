import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

interface CarouselSlideContentProps {
  content: ReactNode[];
  buttonText?: string;
  direction: number;
}

export function CarouselSlideContent({
  content,
  buttonText,
  direction,
}: CarouselSlideContentProps) {
  const [animationDistance, setAnimationDistance] = useState(800);

  // Update animation distance based on screen height
  useEffect(() => {
    const updateAnimationDistance = () => {
      // Use screen height + 20% to ensure element fully extends
      const distance = Math.max(window.innerHeight, 800);
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
      <div className="h-[220px]">
        <div className="flex flex-col gap-2 text-3xl">
          {content.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {buttonText && (
        <div className="h-[60px]">
          <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-default hover:border-none font-bold">
            {buttonText} <MoveRight />
          </Button>
        </div>
      )}
    </motion.div>
  );
}
