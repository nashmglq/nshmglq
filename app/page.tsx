"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Data } from "@/lib/data/data";
import { ThreeDCardDemo } from "@/components/ui/techstack-card";
import { FlipWords } from "@/components/ui/footer-card";
import { Github, Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

function NashPortfolio() {
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isTechStackVisible, setIsTechStackVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const educationRef = useRef(null);
  const techStackRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const observerEduc = new IntersectionObserver(
      ([entry]) => {
        setIsEducationVisible(entry.isIntersecting);
      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const observerTech = new IntersectionObserver(
      ([entry]) => {
        setIsTechStackVisible(entry.isIntersecting);
      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const observerProj = new IntersectionObserver(
      ([entry]) => {
        setIsProjectVisible(entry.isIntersecting);
      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const observerContact = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const observerIntro = new IntersectionObserver(
      ([entry]) => {
        setIsIntroVisible(entry.isIntersecting);
      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    if (educationRef.current) observerEduc.observe(educationRef.current);
    if (techStackRef.current) observerTech.observe(techStackRef.current);
    if (projectRef.current) observerProj.observe(projectRef.current);
    if (contactRef.current) observerContact.observe(contactRef.current);
    if (introRef.current) observerIntro.observe(introRef.current);

  }, []);

  return (
    <div className="bg-black">

      {/* Wrap in div of h-screen and w-full to contain the background lines */}
      <div className="relative w-full h-screen">
        <BackgroundLines className="absolute inset-0 w-full h-full bg-black">
          <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              ref={introRef}
            >
              <h2
                className="bg-clip-text text-transparent text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
   text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Nash Maglaqui, <br />
                <FlipWords
                  words={["Full-stack Developer.", "Computer Engineer.", "Passionate Creator.", "Problem Solver."]}
                  duration={3000}
                  className="text-2xl md:text-4xl lg:text-7xl text-white font-bold"
                />
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-lg text-center mt-4">
                A Computer Engineering Student, aspiring to become a Full-Stack Web Developer
              </p>
            </motion.div>

          </div>
        </BackgroundLines>
      </div>

      {/* Education */}
      <div
        className="flex bg-black text-white items-center justify-center w-full flex-col px-4 py-16"
        ref={educationRef}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={isEducationVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-sky-500 to-blue-600
          text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Education
          </h2>
          <div className="container mx-auto p-4 w-full md:w-1/2 justify-center">
            {Data.educations.map((education, index) => (
              <motion.div
                className="flex flex-wrap md:flex-nowrap mt-2 bg-gradient-to-r from-zinc-900 to-neutral-900 rounded-lg p-3 items-center border border-zinc-800 shadow-lg shadow-cyan-900/10"
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isEducationVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
              >
                <div className="w-full md:w-auto flex-shrink-0 p-2 flex items-center justify-center">
                  <img
                    src={`${education.logoUrl}`}
                    alt={education.school}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                  />
                </div>
                <div className="w-full md:flex-1 px-2 mt-3 md:mt-0">
                  <h1 className="text-white font-bold">{education.school}</h1>
                  <h1 className="text-cyan-400">{education.title}</h1>
                  <p className="text-neutral-400">{education.start} - {education.end}</p>
                  <div className="text-neutral-300 mt-1" dangerouslySetInnerHTML={{ __html: education.description }}></div>
                </div>
              </motion.div>

            ))}
          </div>
        </motion.div>
      </div>

      {/* TechStack */}
      <div
        className="flex bg-black items-center justify-center w-full flex-col px-4 py-16"
        ref={techStackRef}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={isTechStackVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Techstack
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap mt-2 justify-center">
              {Data.Technology.map((tech, index) => (
                <motion.div
                  className="w-full md:w-1/3 m-2 bg-gradient-to-b from-zinc-900 to-black rounded-md p-2 items-center"
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isTechStackVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                >
                  {Object.values(tech.logoUrl).map((icon, iconIndex) => (
                    <img src={icon} key={iconIndex} className="h-10 inline-block mx-2" alt={tech.title} />
                  ))}
                  <h1 className="text-white bg-gradient-to-b md:text-4xl lg:text-3xl font-sans font-bold p-1">{tech.title}</h1>
                  <h3 className="text-neutral-400 max-w-xl mx-auto text-sm md:text-md mt-2">{tech.description}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <div
        className="flex bg-black items-center justify-center w-full flex-col px-4 py-16"
        ref={projectRef}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={isProjectVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400
           text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Projects I've worked with.
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap mt-2 justify-center text-white">
              {Data.project.map((project, index) => (
                <motion.div
                  className="w-full md:w-1/3 sm:w-1/4 m-2 min-h-40 sm:min-h-48 md:min-h-56"

                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isProjectVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                >
                  <CardContainer className="w-full h-full" containerClassName="w-full h-full">
                  <CardBody className="bg-gradient-to-b from-zinc-900 to-slate-900 rounded-md p-2 w-full h-full">
                      <CardItem
                        translateZ={20}
                        className="w-full"
                      >
                        <h1 className="text-white bg-gradient-to-b md:text-4xl lg:text-3xl font-sans font-bold p-1">{project.title}</h1>
                      </CardItem>
                      <CardItem
                        translateZ={50}
                        className="w-full"
                      >
                        <img
                          src={project.imageProj}
                          alt={project.title}
                          className="rounded-md p-2 w-full object-cover"
                        />
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        className="w-full"
                      >
                        <h3 className="text-white max-w-xl mx-auto text-sm md:text-md text-neutral-700 p-2">{project.description}</h3>
                        {Object.values(project.techStack).map((icons, index) => (
                          <p key={index} className="inline-block m-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md px-2 text-white">{icons}</p>
                        ))}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex bg-black items-center justify-center w-full h-screen flex-col px-4 py-20" >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={contactRef}>

          <div className="flex bg-black items-center justify-center w-full flex-col px-4">
            <h2
              className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-400 via-violet-500 to-fuchsia-500
      text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Let's <br />
              <FlipWords
                words={["Connect.", "Collaborate.", "Create.", "Build.", "Innovate."]}
                duration={3000}
                className="text-2xl md:text-4xl lg:text-7xl text-white font-bold"
              />

            </h2>

            <div className="flex space-x-4 items-center p-4">
              <a href="https://github.com/nashmglq" className="text-white hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                <Github size={54} />
              </a>
              <a href="mailto:nashmaglaqui9@gmail.com" className="text-green-500 hover:text-green-200 transition-all duration-300 transform hover:scale-110">
                <Mail size={54} />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-blue-700 hover:text-blue-500 duration-300 hover:scale-110">
                <Linkedin size={54} />
              </a>
              <a href="https://www.instagram.com/vn_shq/" className="text-pink-600 hover:text-pink-400  hover:scale-110 duration-300">
                <Instagram size={54} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div >
  );
}

export default NashPortfolio;