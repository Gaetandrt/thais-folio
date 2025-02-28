import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ContactProps {
  direction: number;
}

/**
 * Contact component with animated transitions
 * Displays contact information with animations matching the carousel
 */
function Contact({ direction }: ContactProps) {
  // Ensure direction is always defined for animation calculations
  const effectiveDirection = direction === 0 ? 1 : direction;

  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <motion.div
        className="relative min-w-[478px] h-[790px] z-20"
        initial={{ x: effectiveDirection > 0 ? -1200 : 1200 }}
        animate={{ x: 0 }}
        exit={{ x: effectiveDirection > 0 ? 1200 : -1200 }}
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
        className="flex flex-col gap-10 text-5xl 2xl:w-[400px] z-20"
        initial={{ y: effectiveDirection > 0 ? 800 : -800 }}
        animate={{ y: 0 }}
        exit={{ y: effectiveDirection > 0 ? -800 : 800 }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        custom={direction}
      >
        <h1 className="font-bold font-stretch-50%">CONTACTEZ MOI !</h1>
        <div className="flex flex-col gap-2 text-3xl">
          <p>07 62 24 74 84</p>
          <p>thaisbouzar@gmail.com</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] font-bold cursor-default hover:border-none">
          JE VOUS RÉPONDS DÈS QUE POSSIBLE
        </Button>
      </motion.div>
    </div>
  );
}

export default Contact;
