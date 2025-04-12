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
  const educationRef = useRef(null);
  const techStackRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

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

    if (educationRef.current) observerEduc.observe(educationRef.current);
    if (techStackRef.current) observerTech.observe(techStackRef.current);
    if (projectRef.current) observerProj.observe(projectRef.current);
    if (contactRef.current) observerContact.observe(contactRef.current);

  }, []);

  return (
    <div className="bg-black">

      <BackgroundLines className="flex bg-black items-center justify-center w-full flex-col px-4">
        <h2
          className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Nash Maglaqui, <br />
          <FlipWords
            words={["Full-stack Developer.", "Computer Engineer.", "Passionate Creator.", "Problem Solver."]}
            duration={3000}
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold"
          />
        </h2>
        <p className="text-white max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          A Computer Engineering Student, aspiring to become a Full-Stack Web Developer
        </p>
      </BackgroundLines>

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
          <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Education
          </h2>
          <div className="container mx-auto p-4 w-full md:w-1/2 justify-center">
            {Data.educations.map((education, index) => (
              <motion.div
                className="flex flex-wrap mt-2 bg-[#222222] rounded-md p-2 items-center"
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isEducationVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
              >
                <div className="w-full md:w-1/6 p-2">
                  <img src={`${education.logoUrl}`} alt={education.school}/>
                </div>
                <div className="w-full md:w-2/3 px-2">
                  <h1>{education.school}</h1>
                  <h1>{education.title}</h1>
                  <p>{education.start} - {education.end}</p>
                  <div dangerouslySetInnerHTML={{ __html: education.description }} ></div>
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
          <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Techstack
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap mt-2 justify-center text-white">
              {Data.Technology.map((tech, index) => (
                <motion.div
                  className="w-full md:w-1/3 m-2 bg-[#222222] rounded-md p-2 items-center"
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isTechStackVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                >
                  {Object.values(tech.logoUrl).map((icon, iconIndex) => (
                    <img src={icon} key={iconIndex} className="h-10 inline-block mx-2" alt={tech.title} />
                  ))}
                  <h1 className="text-white bg-gradient-to-b md:text-4xl lg:text-3xl font-sans font-bold p-1">{tech.title}</h1>
                  <h3 className="text-white max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400">{tech.description}</h3>
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
          <h2 className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Projects I've worked with.
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap mt-2 justify-center text-white">
              {Data.project.map((project, index) => (
                <motion.div
                  className="w-full md:w-1/3 m-2"
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isProjectVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                >
                  <CardContainer className="w-full py-0 px-0 m-0" containerClassName="py-0 px-0 m-0">
                    <CardBody className="bg-[#222222] rounded-md p-2 w-full h-auto">
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
                        <h3 className="text-white max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400 p-2">{project.description}</h3>
                        {Object.values(project.techStack).map((icons, index) => (
                          <p key={index} className="inline-block m-2 bg-green-500 rounded-md px-2 text-white">{icons}</p>
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
              className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Let's <br />
              <FlipWords
                words={["Connect.", "Collaborate.", "Create.", "Build.", "Innovate."]}
                duration={3000}
                className="text-2xl md:text-4xl lg:text-7xl text-white font-bold"
              />

            </h2>

            <div className="flex space-x-4 items-center p-4">
              <a href="https://github.com/nashmglq" className="text-gray-800 hover:text-gray-600 transition-colors">
                <Github size={54} />
              </a>
              <a href="mailto:nashmaglaqui9@gmail.com" className="text-red-600 hover:text-red-400 transition-colors">
                <Mail size={54} />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-blue-700 hover:text-blue-500 transition-colors">
                <Linkedin size={54} />
              </a>
              <a href="https://www.instagram.com/vn_shq/" className="text-pink-600 hover:text-pink-400 transition-colors">
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