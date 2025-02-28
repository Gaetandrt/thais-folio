import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

function Home() {
  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <div className="relative min-w-[478px] h-[790px]">
        <Image
          className="rounded-[224px] shadow-lg object-cover"
          src={"/thais.png"}
          fill={true}
          alt="Thaïs Bouzard"
        />
      </div>
      <div className="flex flex-col gap-10 text-5xl">
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
        <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-default hover:border-none font-bold">
          UTILISES MON SMARTPHONE ! <MoveRight />
        </Button>
      </div>
    </div>
  );
}

export default Home;
