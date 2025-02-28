import { alshData } from "@/constant/showcase/alsh";
import { comData } from "@/constant/showcase/com";
import { designData } from "@/constant/showcase/design";
import { uiUxData } from "@/constant/showcase/ui-ux";
import { useCategory } from "@/context/CategoryContext";
import { useCarousel } from "@/hooks/useCarousel";
import { CategoryData } from "@/types/carrousel";
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

function CarouselHome() {
  const { currentCategory } = useCategory();
  const currentCategoryData = categoriesData[currentCategory];

  const { currentSlide, nextSlide, prevSlide } = useCarousel({
    totalSlides: currentCategoryData.slides.length,
  });

  const currentSlideData = currentCategoryData.slides[currentSlide];

  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <CarouselSlideImage
        src={currentSlideData.image}
        alt={`${currentCategoryData.name}`}
        isPriority={currentCategory === 0 && currentSlide === 0}
      />

      <div className="relative h-[790px] flex items-center">
        <div className="flex flex-col">
          <CarouselSlideContent
            content={currentSlideData.content}
            buttonText={currentSlideData.buttonText}
          />

          <CarouselNavigation onPrevSlide={prevSlide} onNextSlide={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default CarouselHome;
