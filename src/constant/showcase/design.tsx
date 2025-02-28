import { CategoryData } from "@/types/carrousel";

export const designData: CategoryData = {
  id: 4,
  name: "Graphisme",
  slides: [
    {
      id: 1,
      image: "/showcase/design/design-zoe.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GLACIER ZOÉ
        </h2>,
        <p key="content">Projet fictif</p>,
      ],
    },
    {
      id: 2,
      image: "/showcase/design/design-zoe-2.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GLACIER ZOÉ
        </h2>,
        <p key="content">Projet fictif</p>,
      ],
    },
    {
      id: 3,
      image: "/showcase/design/design-mc-gordes.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          MC GORDES - <span className="font-light">LOGO</span>
        </h2>,
        <p key="content">Club de moto à Gordes</p>,
      ],
    },
    {
      id: 4,
      image: "/showcase/design/design-mc-gordes-mob.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          MC GORDES - <span className="font-light">AFFICHE</span>
        </h2>,
        <p key="content">Club de moto à Gordes</p>,
      ],
    },
    {
      id: 5,
      image: "/showcase/design/design-mc-gordes-training.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          MC GORDES - <span className="font-light">AFFICHE</span>
        </h2>,
        <p key="content">Club de moto à Gordes</p>,
      ],
    },
  ],
};
