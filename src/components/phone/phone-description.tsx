import { pageList } from "@/constant/constant";
import { Button } from "../ui/button";

type PhoneDescriptionProps = {
  setPage: (page: (typeof pageList)[number]) => void;
};

function PhoneDescription({ setPage }: PhoneDescriptionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="font-bold mb-2">Thaïs</h2>
        <p className="text-[14px]">📱 COM / 🖌️ DESIGN / 🏃‍♀️ RUN</p>
        <p className="text-[14px]">
          Je maitrise Figma, DaVinci, Adobe Illustrator, Capcut et Canva !
        </p>
      </div>
      <div className="flex gap-2 w-full">
        <Button className="w-full" onClick={() => setPage("categories")}>
          <p>PORTFOLIO</p>
        </Button>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => setPage("contact")}
        >
          <p>M&apos;ECRIRE</p>
        </Button>
      </div>
    </div>
  );
}

export default PhoneDescription;
