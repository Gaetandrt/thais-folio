import { CategoryData } from "@/types/carrousel";

export const designData: CategoryData = {
  id: 4,
  name: "Graphisme",
  slides: [
    {
      id: 1,
      image: "/portfolio/contact.jpg",
      title: "CONTACTEZ-MOI",
      subtitle: [
        <>
          Disponible pour{" "}
          <span className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            COLLABORATIONS
          </span>
        </>,
        <>
          Basée à{" "}
          <span className="font-bold font-stretch-50% text-4xl">PARIS</span>
        </>,
      ],
      buttonText: "ENVOYER UN MESSAGE",
    },
    {
      id: 2,
      image: "/portfolio/social.jpg",
      title: "RÉSEAUX SOCIAUX",
      subtitle: [
        <>
          Suivez-moi sur{" "}
          <span className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            INSTAGRAM
          </span>
        </>,
        <>
          Et{" "}
          <span className="font-bold font-stretch-50% text-4xl">LINKEDIN</span>
        </>,
      ],
      buttonText: "MES PROFILS",
    },
  ],
};
