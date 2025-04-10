import Image from "next/image";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Data } from "@/lib/data/data";
import { ThreeDCardDemo } from "@/components/techstack-card";

function NashPortfolio() {
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

      {/* Education */}
      <div className="flex bg-black text-white items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Education
        </h2>
        <div className=" container mx-auto p-4 w-full md:w-1/2 justify-center">
          {Data.educations.map((education) => (
            <div className="flex flex-wrap mt-2 bg-[#222222] rounded-md p-2 items-center">
              <div className="w-full md:w-1/6 p-2">
                <img src={`${education.logoUrl}`} />
              </div>
              <div className="w-full md:w-2/3 px-2">
                <h1>{education.school}</h1>
                <h1>{education.title}</h1>
                <p>{education.start} - {education.end}</p>
                <div dangerouslySetInnerHTML={{ __html: education.description }} ></div>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/* TechStack */}
      <div className="flex bg-black items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Techstack
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap mt-2 justify-center text-white">
            {Data.Technology.map((tech, index) => (
              <div className="w-full md:w-1/3 m-2 bg-[#222222] rounded-md p-2 items-center" key={index}>
                {Object.values(tech.logoUrl).map((icon) => (
                  <img src={icon} className="h-10 inline-block mx-2" />
                ))}
                <h1 className="text-white bg-gradient-to-b md:text-4xl lg:text-3xl font-sans font-bold p-1">{tech.title}</h1>
                <h3 className="text-white max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400">{tech.description}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Projects */}
      <div className="flex bg-black items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Projects I've worked with.
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap mt-2 justify-center text-white">
          {Data.project.map(project => (
            <div className="w-full md:w-1/3 m-2 bg-[#222222] rounded-md p-2 items-center">              
            <h1 className="text-white bg-gradient-to-b md:text-4xl lg:text-3xl font-sans font-bold p-1">{project.title}</h1>
              <h3 className="text-white max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400">{project.description}</h3>
            </div>
          ))}
        </div>
        </div>
      </div>

    </div>
  );
}

export default NashPortfolio


{/* */ }