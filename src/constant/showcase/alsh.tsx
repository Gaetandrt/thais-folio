import { CategoryData } from "@/types/carrousel";

export const alshData: CategoryData = {
  id: 3,
  name: "ALSH",
  slides: [
    {
      id: 1,
      image: "/showcase/alsh/alsh-main.png",
      content: [
        <h2 className="text-4xl font-bold font-stretch-50%">
          L&apos;ÉDUCATION -{" "}
          <span className="font-light">5 ANS D&apos;EXPÉRIENCE</span>
        </h2>,
        <p>Animatrice, AED, coach et même directrice de Centre de Loisirs</p>,
        <p className="text-sm mt-4">
          Avant de m'inetrreser au monde digitale, je souhaiter être professeur
          de écoles.
        </p>,
      ],
    },
    {
      id: 2,
      image: "/showcase/alsh/alsh-activity.png",
      content: [
        <h2 className="text-4xl font-bold font-stretch-50%">
          ÊTRE ANIMATRICE -{" "}
          <span className="font-light">LA CREATIVITÉ EN ACTION</span>
        </h2>,
        <p>
          Dès mes 16ans, j'ai commencé a mener des groupes, des activitées et à
          créer des programmes.
        </p>,
        <p className="text-sm mt-4">
          Des idées, de la créativité il en fallait ! Mon plus gros projet
          restera la création et gestion d'un spectacle.
        </p>,
      ],
    },
    {
      id: 3,
      image: "/showcase/alsh/alsh-outdoor.png",
      content: [
        <h2 className="text-4xl font-bold font-stretch-50%">
          ÊTRE DIRECTRICE -{" "}
          <span className="font-light">BONJOUR LE MANAGEMENT !</span>
        </h2>,
        <p>
          J'ai rapidement gravi les echelons. Rédaction et élaboration de grands
          projets, recrutement, management...
        </p>,
        <p className="text-sm mt-4">
          Je suis passée du BAFA au BAFD ! Mon plus gros projet restera
          l'organisation d'un séjour de vacances.
        </p>,
      ],
    },
    {
      id: 4,
      image: "/showcase/alsh/alsh-build.png",
      content: [
        <h2 className="text-4xl font-bold font-stretch-50%">
          MA FORMATION -{" "}
          <span className="font-light">
            LICENSE SCIENCE DE L&apos;ÉDUCATION
          </span>
        </h2>,
        <p>
          En paralelles de ces rôles{" "}
          <span className="italic">(animatrice, AED, directrice et coach)</span>
          , j'ai obtenue ma licence !
        </p>,
        <p className="text-sm mt-4">
          Université ALLSH d'Aix en Provence : obtention juillet 2024
        </p>,
      ],
    },
  ],
};
