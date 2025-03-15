import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

function BackgroundLinesDemo() {
  return (
    <div>


      <BackgroundLines className="flex bg-black items-center justify-center w-full flex-col px-4">
        <h2
          className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Nash Maglaqui, <br /> Full-stack Developer.
        </h2>
        <p className="text-white max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          A Computer Enginering Student, aspiring to become a Full-Stack Web Developer
        </p>
      </BackgroundLines>


      <div className="flex bg-white items-center justify-center w-full flex-col px-4">
        <h1>
          
        </h1>
      </div>
    </div>
  );
}

export default BackgroundLinesDemo