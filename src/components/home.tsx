import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface HomeProps {
  direction: number;
}

/**
 * Home component with animated transitions
 * Displays the main landing page with image and introduction
 */
function Home({ direction }: HomeProps) {
  const [horizontalDistance, setHorizontalDistance] = useState(1200);
  const [verticalDistance, setVerticalDistance] = useState(800);

  // Update animation distances based on screen dimensions
  useEffect(() => {
    const updateAnimationDistances = () => {
      // Use screen dimensions + 20% to ensure elements fully extend beyond viewport
      const hDistance = Math.max(window.innerWidth * 1.2, 1200);
      const vDistance = Math.max(window.innerHeight * 1.2, 800);
      setHorizontalDistance(hDistance);
      setVerticalDistance(vDistance);
    };

    updateAnimationDistances();

    window.addEventListener("resize", updateAnimationDistances);
    return () => window.removeEventListener("resize", updateAnimationDistances);
  }, []);

  // Ensure direction is always defined for animation calculations
  const effectiveDirection = direction === 0 ? 1 : direction;

  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <motion.div
        className="relative min-w-[478px] h-[790px] z-20"
        initial={{
          x: effectiveDirection > 0 ? -horizontalDistance : horizontalDistance,
        }}
        animate={{ x: 0 }}
        exit={{
          x: effectiveDirection > 0 ? horizontalDistance : -horizontalDistance,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        custom={direction}
      >
        <Image
          className="rounded-[224px] shadow-lg object-cover"
          src={"/thais.png"}
          fill={true}
          alt="Thaïs Bouzard"
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 text-5xl w-full 2xl:w-[400px] z-20"
        initial={{
          y: effectiveDirection > 0 ? verticalDistance : -verticalDistance,
        }}
        animate={{ y: 0 }}
        exit={{
          y: effectiveDirection > 0 ? -verticalDistance : verticalDistance,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        custom={direction}
      >
        <h1 className="font-bold font-stretch-50%">BONJOUR !</h1>
        <div className="flex flex-col gap-2 text-3xl">
          <p>
            Je m&apos;appelle{" "}
            <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
              THAIS
            </span>
          </p>
          <p>
            Étudiante à{" "}
            <span className="font-bold font-stretch-50% text-4xl">
              SUP DE COM&apos;
            </span>
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-pointer hover:border-none font-bold w-2/3">
          UTILISES MON SMARTPHONE ! <MoveRight />
        </Button>
      </motion.div>
    </div>
  );
}

export default Home;
