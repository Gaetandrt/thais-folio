import { alshData } from "@/constant/showcase/alsh";
import { comData } from "@/constant/showcase/com";
import { designData } from "@/constant/showcase/design";
import { uiUxData } from "@/constant/showcase/ui-ux";
import { useCategory } from "@/context/CategoryContext";
import { useCarousel } from "@/hooks/useCarousel";
import { CategoryData } from "@/types/carrousel";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  CarouselNavigation,
  CarouselSlideContent,
  CarouselSlideImage,
} from "./carousel";

export const categoriesData: CategoryData[] = [
  uiUxData,
  comData,
  alshData,
  designData,
];

interface CarouselHomeProps {
  direction?: number;
}

/**
 * Carousel component for displaying category content
 * Manages slides and animations for each category
 */
function CarouselHome({ direction: externalDirection }: CarouselHomeProps) {
  const { currentCategory } = useCategory();
  const currentCategoryData = categoriesData[currentCategory];
  const [direction, setDirection] = useState(externalDirection || 0);
  const prevCategoryRef = useRef(currentCategory);
  const [horizontalDistance, setHorizontalDistance] = useState(1200);
  const [verticalDistance, setVerticalDistance] = useState(800);

  // Update animation distances based on screen dimensions
  useEffect(() => {
    const updateAnimationDistances = () => {
      // Use screen dimensions + 20% to ensure elements fully extend beyond viewport
      const hDistance = Math.max(window.innerWidth * 1.2, 1200);
      const vDistance = Math.max(window.innerHeight * 1.2, 800);
      setHorizontalDistance(hDistance);
      setVerticalDistance(vDistance);
    };

    updateAnimationDistances();

    window.addEventListener("resize", updateAnimationDistances);
    return () => window.removeEventListener("resize", updateAnimationDistances);
  }, []);

  const { currentSlide, nextSlide, prevSlide } = useCarousel({
    totalSlides: currentCategoryData.slides.length,
  });

  // Navigation handlers with direction tracking for animations
  const handleNextSlide = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    prevSlide();
  };

  // Handle category changes with appropriate animation direction
  useEffect(() => {
    if (prevCategoryRef.current !== currentCategory) {
      const newDirection = currentCategory > prevCategoryRef.current ? 1 : -1;
      setDirection(newDirection);
      prevCategoryRef.current = currentCategory;
    }
  }, [currentCategory]);

  // Update internal direction when external direction changes
  useEffect(() => {
    if (externalDirection !== undefined) {
      setDirection(externalDirection);
    }
  }, [externalDirection]);

  const currentSlideData = currentCategoryData.slides[currentSlide];

  // Ensure direction is always defined for animation calculations
  const effectiveDirection = direction === 0 ? 1 : direction;

  return (
    // Main container with animation for page transitions
    <div className="w-full h-full flex items-center justify-center gap-10 relative overflow-visible">
      {/* Image container with horizontal animation */}
      <motion.div
        className="relative min-w-[478px] h-[790px] overflow-visible z-20"
        initial={{
          x: effectiveDirection > 0 ? -horizontalDistance : horizontalDistance,
        }}
        animate={{ x: 0 }}
        exit={{
          x: effectiveDirection > 0 ? horizontalDistance : -horizontalDistance,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <CarouselSlideImage
            key={`image-${currentCategory}-${currentSlide}`}
            src={currentSlideData.image}
            alt={`${currentCategoryData.name}`}
            isPriority={currentCategory === 0 && currentSlide === 0}
            direction={direction}
          />
        </AnimatePresence>
      </motion.div>

      {/* Content container with vertical animation */}
      <motion.div
        className="relative h-[790px] flex items-center overflow-visible z-20"
        initial={{
          y: effectiveDirection > 0 ? verticalDistance : -verticalDistance,
        }}
        animate={{ y: 0 }}
        exit={{
          y: effectiveDirection > 0 ? -verticalDistance : verticalDistance,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <div className="flex flex-col">
          <div className="relative overflow-visible">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <CarouselSlideContent
                key={`content-${currentCategory}-${currentSlide}`}
                content={currentSlideData.content}
                buttonText={currentSlideData.buttonText}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          {/* Fixed navigation controls */}
          <div className="mt-10">
            <CarouselNavigation
              onPrevSlide={handlePrevSlide}
              onNextSlide={handleNextSlide}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CarouselHome;
