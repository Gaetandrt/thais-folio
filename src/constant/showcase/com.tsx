import { CategoryData } from "@/types/carrousel";

export const comData: CategoryData = {
  id: 2,
  name: "COM'",
  slides: [
    {
      id: 1,
      image: "/showcase/com/cambio-main.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          CAFÉ CAMBIO
        </h2>,
        <p key="content">
          Pendant mon séjour au{" "}
          <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            QUEBEC
          </span>
          <br />
          J&apos;ai été bénévolement leur
        </p>,
        <p key="content-1">
          <span className="font-bold font-stretch-50% text-4xl">
            RESPONSABLE COMMUNICATION
          </span>
        </p>,
      ],
    },
    {
      id: 2,
      image: "/showcase/com/cambio-insta.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          MES MISSIONS
        </h2>,
        <ul key="content-2" className="list-disc ml-10 space-y-2 text-[26px]">
          <li>
            <p>Renouveler leur banque d&apos;images</p>
          </li>
          <li>
            <p>Créer du contenu</p>
          </li>
          <li>
            <p>Mettre à jour la page Instagram</p>
          </li>
          <li>
            <p>
              Élaborer une stratégie de contenu pour leur 20ème anniversaire
            </p>
          </li>
        </ul>,
      ],
    },
    {
      id: 3,
      image: "/showcase/com/cambio-reach.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          LES RÉSULTATS - AUDIENCE, VISITES ET FOLLOWERS
        </h2>,
        <p key="content">
          Sur Facebook, une augmentation de{" "}
          <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
            THAÏS
          </span>
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Par rapport aux{" "}
          <span className="font-bold text-xl">3 derniers mois</span>
        </p>,
      ],
    },
    {
      id: 4,
      image: "/showcase/com/cambio-strategy.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          STRATÉGIE DE CONTENU -{" "}
          <span className="font-light">LES 20 ANS DE CAFÉ CAMBIO</span>
        </h2>,
        <p key="content">
          Voici un exemple de contenu faisant partie de la stratégie des 20ans.
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Il s&apos;agit ici d&apos;un post &quot;nostalgie&quot; qui a été
          publié sur Instagram.
        </p>,
      ],
    },
    {
      id: 5,
      image: "/showcase/com/cambio-strategy-result.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          STRATÉGIE DE CONTENU -{" "}
          <span className="font-light">LES RÉSULTATS</span>
        </h2>,
        <p key="content">
          Beaucoups d&apos;interactions (106) et d&apos;audience (5,1K)
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Nous sommes actuellement en pleine mise en action de la stratégie. Les
          résulats finaux ne sont pas encore disponible !
        </p>,
      ],
    },
    {
      id: 6,
      image: "/showcase/com/cambio-showcase-1.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GALERIE DE PHOTOS
        </h2>,
      ],
    },
    {
      id: 7,
      image: "/showcase/com/cambio-showcase-2.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GALERIE DE PHOTOS
        </h2>,
      ],
    },
    {
      id: 8,
      image: "/showcase/com/cambio-showcase-3.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GALERIE DE PHOTOS
        </h2>,
      ],
    },
    {
      id: 9,
      image: "/showcase/com/cambio-showcase-4.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          GALERIE DE PHOTOS
        </h2>,
      ],
    },
  ],
};
