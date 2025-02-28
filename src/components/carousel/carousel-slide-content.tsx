import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ReactNode } from "react";

interface CarouselSlideContentProps {
  content: ReactNode[];
  buttonText?: string;
}

export function CarouselSlideContent({
  content,
  buttonText,
}: CarouselSlideContentProps) {
  return (
    <div className="flex flex-col gap-10 text-5xl 2xl:w-[400px]">
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
    </div>
  );
}
