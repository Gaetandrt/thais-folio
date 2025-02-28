import { CategoryData } from "@/types/carrousel";

export const uiUxData: CategoryData = {
  id: 1,
  name: "UI/UX",
  slides: [
    {
      id: 1,
      image: "/showcase/ui-ux/agence-kuster.png",
      title: "AGENCE KUSTER",
      subtitle: [
        <>
          Design site web via{" "}
          <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            FIGMA
          </span>
        </>,
        <>
          <span className="italic">Projet actuellement en cours.</span>
        </>,
      ],
    },
    {
      id: 2,
      image: "/showcase/ui-ux/kaddle.png",
      title: "KaDDle",
      subtitle: [
        <>
          Design application mobile via{" "}
          <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            FIGMA
          </span>
        </>,
        <>
          <span className="italic">Projet actuellement en cours.</span>
        </>,
      ],
    },
  ],
};
