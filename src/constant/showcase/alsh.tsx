import { CategoryData } from "@/types/carrousel";

export const alshData: CategoryData = {
  id: 3,
  name: "ALSH",
  slides: [
    {
      id: 1,
      image: "/portfolio/skills.jpg",
      title: "MES COMPÉTENCES",
      subtitle: [
        <>
          Maîtrise des{" "}
          <span className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            OUTILS
          </span>
        </>,
        <>
          Expert en{" "}
          <span className="font-bold font-stretch-50% text-4xl">
            STRATÉGIE DIGITALE
          </span>
        </>,
      ],
      buttonText: "VOIR MON CV",
    },
    {
      id: 2,
      image: "/portfolio/design-tools.jpg",
      title: "DESIGN",
      subtitle: [
        <>
          Adobe{" "}
          <span className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            CREATIVE SUITE
          </span>
        </>,
        <>
          Figma &{" "}
          <span className="font-bold font-stretch-50% text-4xl">SKETCH</span>
        </>,
      ],
      buttonText: "MES RÉALISATIONS",
    },
    {
      id: 3,
      image: "/portfolio/web-skills.jpg",
      title: "WEB",
      subtitle: [
        <>
          Développement{" "}
          <span className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            FRONTEND
          </span>
        </>,
        <>
          WordPress &{" "}
          <span className="font-bold font-stretch-50% text-4xl">CMS</span>
        </>,
      ],
      buttonText: "MES SITES WEB",
    },
  ],
};
