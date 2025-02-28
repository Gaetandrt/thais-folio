import { pageList } from "@/constant/constant";
import { useCategory } from "@/context/CategoryContext";
import { categoriesData } from "../carousel-home";
import { Button } from "../ui/button";

type PhoneStoryProps = {
  setPage: (page: (typeof pageList)[number]) => void;
};

function PhoneStory({ setPage }: PhoneStoryProps) {
  const { setCurrentCategory } = useCategory();

  // Fonction pour changer de catégorie et naviguer vers la page des catégories
  const handleCategoryChange = (categoryIndex: number) => {
    setCurrentCategory(categoryIndex);
    setPage("categories");
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
          onClick={() => handleCategoryChange(0)} // Présentation
        >
          <span className="text-3xl">👋</span>
        </Button>
        <p className="text-sm text-white/90">{categoriesData[0].name}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
          onClick={() => handleCategoryChange(1)} // Projets
        >
          <span className="text-3xl">💻</span>
        </Button>
        <p className="text-sm text-white/90">{categoriesData[1].name}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
          onClick={() => handleCategoryChange(2)} // Compétences
        >
          <span className="text-3xl">🖌️</span>
        </Button>
        <p className="text-sm text-white/90">{categoriesData[2].name}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
          onClick={() => handleCategoryChange(3)} // Contact
        >
          <span className="text-3xl">📱</span>
        </Button>
        <p className="text-sm text-white/90">{categoriesData[3].name}</p>
      </div>
    </div>
  );
}

export default PhoneStory;
