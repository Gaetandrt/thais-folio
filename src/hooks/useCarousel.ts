import { useState } from "react";

interface UseCarouselProps {
  totalSlides: number;
  initialSlide?: number;
}

export function useCarousel({
  totalSlides,
  initialSlide = 0,
}: UseCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
