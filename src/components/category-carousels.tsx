import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { CategoryData } from "@/types/carrousel";

function CategoryCarousels() {
  // Données pour les 4 catégories de carousels
  const categoriesData: CategoryData[] = [
    {
      id: 1,
      name: "Présentation",
      slides: [
        {
          id: 1,
          image: "/thais.png",
          title: "BONJOUR !",
          subtitle: [
            <>
              Je m&apos;appelle{" "}
              <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                THAIS
              </span>
            </>,
            <>
              Étudiante à{" "}
              <span className="font-bold font-stretch-50% text-4xl">
                SUP DE COM&apos;
              </span>
            </>,
          ],
          buttonText: "UTILISES MON SMARTPHONE !",
        },
        {
          id: 2,
          image: "/portfolio/about-me.jpg",
          title: "À PROPOS",
          subtitle: [
            <>
              Passionnée de{" "}
              <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                COMMUNICATION
              </span>
            </>,
            <>
              Basée à{" "}
              <span className="font-bold font-stretch-50% text-4xl">PARIS</span>
            </>,
          ],
          buttonText: "EN SAVOIR PLUS",
        },
      ],
    },
    {
      id: 2,
      name: "Projets",
      slides: [
        {
          id: 1,
          image: "/portfolio/design.jpg",
          title: "MES DESIGNS",
          subtitle: [
            <>
              Passionnée de{" "}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                CRÉATION
              </span>
            </>,
            <>
              Spécialisée en{" "}
              <span className="font-bold font-stretch-50% text-4xl">
                COMMUNICATION VISUELLE
              </span>
            </>,
          ],
          buttonText: "DÉCOUVRIR MES PROJETS",
        },
        {
          id: 2,
          image: "/portfolio/project1.jpg",
          title: "PROJET ALPHA",
          subtitle: [
            <>
              Campagne pour{" "}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                MARQUE X
              </span>
            </>,
            <>
              Réalisée en{" "}
              <span className="font-bold font-stretch-50% text-4xl">2023</span>
            </>,
          ],
          buttonText: "VOIR LE PROJET",
        },
        {
          id: 3,
          image: "/portfolio/project2.jpg",
          title: "PROJET BETA",
          subtitle: [
            <>
              Identité visuelle pour{" "}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                STARTUP Y
              </span>
            </>,
            <>
              Réalisée en{" "}
              <span className="font-bold font-stretch-50% text-4xl">2022</span>
            </>,
          ],
          buttonText: "EXPLORER",
        },
      ],
    },
    {
      id: 3,
      name: "Compétences",
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
              <span className="font-bold font-stretch-50% text-4xl">
                SKETCH
              </span>
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
    },
    {
      id: 4,
      name: "Contact",
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
              <span className="font-bold font-stretch-50% text-4xl">
                LINKEDIN
              </span>
            </>,
          ],
          buttonText: "MES PROFILS",
        },
      ],
    },
  ];

  // État pour la catégorie et slide actuelles
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigation entre les slides
  const nextSlide = () => {
    const categorySlides = categoriesData[currentCategory].slides;
    setCurrentSlide((prev) =>
      prev === categorySlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    const categorySlides = categoriesData[currentCategory].slides;
    setCurrentSlide((prev) =>
      prev === 0 ? categorySlides.length - 1 : prev - 1
    );
  };

  // Changement de catégorie
  const changeCategory = (index: number) => {
    setCurrentCategory(index);
    setCurrentSlide(0); // Réinitialiser à la première slide lors du changement de catégorie
  };

  // Données actuelles
  const currentCategoryData = categoriesData[currentCategory];
  const currentSlideData = currentCategoryData.slides[currentSlide];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation des catégories */}
      <div className="flex justify-center gap-6 mb-8">
        {categoriesData.map((category, index) => (
          <button
            key={category.id}
            onClick={() => changeCategory(index)}
            className={`px-4 py-2 rounded-full transition-colors ${
              index === currentCategory
                ? "bg-gradient-to-r from-[#529AFA] to-[#9747FF] text-white font-bold"
                : "bg-white/10 hover:bg-white/20 text-white/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Navigation du carousel */}
        <button
          onClick={prevSlide}
          className="absolute left-10 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        <div className="w-full h-full gap-10 flex items-center justify-center">
          <div className="relative min-w-[478px] h-[790px]">
            <Image
              className="rounded-[224px] shadow-lg object-cover transition-opacity duration-500"
              src={currentSlideData.image}
              fill={true}
              alt={`${currentCategoryData.name} - ${currentSlideData.title}`}
              priority={currentCategory === 0 && currentSlide === 0}
            />
          </div>

          <div className="flex flex-col gap-10 text-5xl">
            <h1 className="font-bold font-stretch-50%">
              {currentSlideData.title}
            </h1>
            <div className="flex flex-col gap-2 text-3xl">
              {currentSlideData.subtitle.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-default hover:border-none font-bold">
              {currentSlideData.buttonText} <MoveRight />
            </Button>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-10 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
          aria-label="Slide suivante"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-10 flex gap-2">
          {currentCategoryData.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousels;
