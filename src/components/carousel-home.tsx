import { alshData } from "@/constant/showcase/alsh";
import { comData } from "@/constant/showcase/com";
import { designData } from "@/constant/showcase/design";
import { uiUxData } from "@/constant/showcase/ui-ux";
import { useCategory } from "@/context/CategoryContext";
import { CategoryData } from "@/types/carrousel";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export const categoriesData: CategoryData[] = [
  uiUxData,
  comData,
  alshData,
  designData,
];

function CarouselHome() {
  // Utiliser le contexte pour la catégorie actuelle
  const { currentCategory } = useCategory();

  // État local pour la slide actuelle
  const [currentSlide, setCurrentSlide] = useState(4);

  // Navigation entre les slides
  const nextSlide = () => {
    const categorySlides = categoriesData[currentCategory].slides;
    setCurrentSlide((prev) =>
      prev === categorySlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    const categorySlides = categoriesData[currentCategory].slides;
    setCurrentSlide((prev) =>
      prev === 0 ? categorySlides.length - 1 : prev - 1
    );
  };

  // Données actuelles
  const currentCategoryData = categoriesData[currentCategory];
  const currentSlideData = currentCategoryData.slides[currentSlide];

  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <div className="relative min-w-[478px] h-[790px]">
        <Image
          className="rounded-[224px] shadow-lg object-cover transition-opacity duration-500"
          src={currentSlideData.image}
          fill={true}
          alt={`${currentCategoryData.name} - ${currentSlideData.title}`}
          priority={currentCategory === 0 && currentSlide === 0}
        />
      </div>

      <div className="relative h-[790px] flex items-center">
        <div className="flex flex-col gap-10 text-5xl">
          <h1 className="font-bold font-stretch-50%">
            {currentSlideData.title}
          </h1>
          <div className="flex flex-col gap-2 text-3xl min-h-[120px]">
            {currentSlideData.subtitle.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </div>
          {currentSlideData.buttonText && (
            <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-default hover:border-none font-bold">
              {currentSlideData.buttonText} <MoveRight />
            </Button>
          )}

          {/* Navigation du carousel - position absolue pour la fixer */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <Button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              aria-label="Slide précédente"
              size="icon"
            >
              <ChevronLeft className="text-white" size={24} />
            </Button>

            {/* Indicateurs de slide */}
            <div className="flex gap-2">
              {currentCategoryData.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Aller à la slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              aria-label="Slide suivante"
              size="icon"
            >
              <ChevronRight className="text-white" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselHome;
