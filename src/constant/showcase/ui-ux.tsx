import { CategoryData } from "@/types/carrousel";

export const uiUxData: CategoryData = {
  id: 1,
  name: "UI/UX",
  slides: [
    {
      id: 1,
      image: "/showcase/ui-ux/agence-kuster.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          AGENCE KUSTER
        </h2>,
        <p key="content">
          Design site web via{" "}
          <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            FIGMA
          </span>
        </p>,
        <p key="content-2">
          <span className="italic">Projet actuellement en cours.</span>
        </p>,
      ],
    },
    {
      id: 2,
      image: "/showcase/ui-ux/kaddle.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          KaDDle
        </h2>,
        <p key="content">
          Design application mobile via{" "}
          <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            FIGMA
          </span>
        </p>,
        <p key="content-2">
          <span className="italic">Projet actuellement en cours.</span>
        </p>,
      ],
    },
  ],
};
