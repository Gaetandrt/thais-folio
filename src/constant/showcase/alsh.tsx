import { CategoryData } from "@/types/carrousel";

export const alshData: CategoryData = {
  id: 3,
  name: "ALSH",
  slides: [
    {
      id: 1,
      image: "/showcase/alsh/alsh-main.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          L&apos;ÉDUCATION -{" "}
          <span className="font-light">5 ANS D&apos;EXPÉRIENCE</span>
        </h2>,
        <p key="content">
          Animatrice, AED, coach et même directrice de Centre de Loisirs
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Avant de m&apos;intéresser au monde digitale, je souhaiter être
          professeur de écoles.
        </p>,
      ],
    },
    {
      id: 2,
      image: "/showcase/alsh/alsh-activity.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          ÊTRE ANIMATRICE -{" "}
          <span className="font-light">LA CREATIVITÉ EN ACTION</span>
        </h2>,
        <p key="content">
          Dès mes 16ans, j&apos;ai commencé a mener des groupes, des activitées
          et à créer des programmes.
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Des idées, de la créativité il en fallait ! Mon plus gros projet
          restera la création et gestion d&apos;un spectacle.
        </p>,
      ],
    },
    {
      id: 3,
      image: "/showcase/alsh/alsh-outdoor.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          ÊTRE DIRECTRICE -{" "}
          <span className="font-light">BONJOUR LE MANAGEMENT !</span>
        </h2>,
        <p key="content">
          J&apos;ai rapidement gravi les echelons. Rédaction et élaboration de
          grands projets, recrutement, management...
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Je suis passée du BAFA au BAFD ! Mon plus gros projet restera
          l&apos;organisation d&apos;un séjour de vacances.
        </p>,
      ],
    },
    {
      id: 4,
      image: "/showcase/alsh/alsh-build.png",
      content: [
        <h2 key="title" className="text-4xl font-bold font-stretch-50%">
          MA FORMATION -{" "}
          <span className="font-light">
            LICENSE SCIENCE DE L&apos;ÉDUCATION
          </span>
        </h2>,
        <p key="content">
          En paralelles de ces rôles{" "}
          <span className="italic">(animatrice, AED, directrice et coach)</span>
          , j&apos;ai obtenue ma licence !
        </p>,
        <p key="content-2" className="text-sm mt-4">
          Université ALLSH d&apos;Aix en Provence : obtention juillet 2024
        </p>,
      ],
    },
  ],
};
