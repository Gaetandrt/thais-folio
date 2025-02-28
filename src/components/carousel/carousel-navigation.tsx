import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export function CarouselNavigation({
  onPrevSlide,
  onNextSlide,
}: CarouselNavigationProps) {
  return (
    <div className="flex items-center justify-start gap-8 mt-5 w-full">
      <Button
        onClick={onPrevSlide}
        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
        aria-label="Slide précédente"
        size="icon"
      >
        <ChevronLeft className="text-white" size={24} />
      </Button>

      <Button
        onClick={onNextSlide}
        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
        aria-label="Slide suivante"
        size="icon"
      >
        <ChevronRight className="text-white" size={24} />
      </Button>
    </div>
  );
}
