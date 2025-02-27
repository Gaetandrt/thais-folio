import Phone from "@/components/phone";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <main className="relative flex items-center gap-36 justify-between h-screen w-full p-32">
        {/* Banderole défilante */}
        <div className="absolute bottom-1/4 left-0 right-0 w-full overflow-hidden -z-10">
          <div className="whitespace-nowrap animate-marquee flex items-center">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className="text-6xl font-bold text-background tracking-wider uppercase"
                    style={{
                      textShadow:
                        "1px 1px 0 #FFFF, -1px -1px 0 #FFFF, 1px -1px 0 #FFFF, -1px 1px 0 #FFFF",
                    }}
                  >
                    EXPLORE MY PORTFOLIO
                  </span>
                  <div className="relative flex items-center justify-center w-9 h-9 m-6">
                    <Image
                      src={"/star.svg"}
                      fill={true}
                      alt="Star"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

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
                Je m'appelle{" "}
                <span className="bg-gradient-to-r from-[#529AFA] to-[#9747FF] bg-clip-text text-transparent font-bold font-stretch-50% text-4xl">
                  THAIS
                </span>
              </p>
              <p>
                Étudiante à{" "}
                <span className="font-bold font-stretch-50% text-4xl">
                  SUP DE COM'
                </span>
              </p>
            </div>
            <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] cursor-pointer hover:from-[#3a8dfa] hover:to-[#8629ff] font-bold">
              Utilises mon smartphone ! <MoveRight />
            </Button>
          </div>
        </div>
        <div className="relative w-3/5 h-3/4">
          <Phone />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
