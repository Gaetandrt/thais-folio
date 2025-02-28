"use client";
import CarouselHome from "@/components/carousel-home";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Phone from "@/components/phone/phone";
import { pageList } from "@/constant/constant";
import { CategoryProvider } from "@/context/CategoryContext";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

/**
 * Main application page that manages content display based on state
 * Uses AnimatePresence to create smooth transitions between components
 */
export default function Page() {
  const [page, setPage] = useState<(typeof pageList)[number]>("home");
  const [direction, setDirection] = useState(0);

  // Change page with direction for animations
  const changePage = (newPage: (typeof pageList)[number]) => {
    // Determine animation direction based on page change
    if (newPage === "home" && page === "contact") setDirection(-1);
    else if (newPage === "contact" && page === "home") setDirection(1);
    else if (newPage === "categories") setDirection(1);
    else if (page === "categories") setDirection(-1);
    else setDirection(0);

    setPage(newPage);
  };

  return (
    <CategoryProvider>
      <div className="w-full h-screen">
        <main className="relative flex items-center gap-32 h-screen w-full 2xl:p-32 p-10">
          {/* Scrolling banner */}
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

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {page === "home" && <Home key="home" direction={direction} />}
            {page === "contact" && (
              <Contact key="contact" direction={direction} />
            )}
            {page === "categories" && (
              <CarouselHome key="categories" direction={direction} />
            )}
          </AnimatePresence>

          <div className="relative w-3/5 h-3/4">
            <Phone setPage={changePage} page={page} />
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
