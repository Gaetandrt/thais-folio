"use client";
import CarouselHome from "@/components/carousel-home";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Phone from "@/components/phone/phone";
import { pageList } from "@/constant/constant";
import { CategoryProvider } from "@/context/CategoryContext";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [page, setPage] = useState<(typeof pageList)[number]>("home");

  return (
    <CategoryProvider>
      <div className="w-full h-screen">
        <main className="relative flex items-center gap-36 justify-between h-screen w-full 2xl:p-10 p-32">
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

          {page === "home" && <Home />}
          {page === "contact" && <Contact />}
          {page === "categories" && <CarouselHome />}
          <div className="relative w-3/5 h-3/4">
            <Phone setPage={setPage} page={page} />
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
    </CategoryProvider>
  );
}
