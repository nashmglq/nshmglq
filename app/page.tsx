"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Data } from "@/lib/data/data";
import { ThreeDCardDemo } from "@/components/ui/techstack-card";
import { FlipWords } from "@/components/ui/footer-card";
import { Github, Mail, Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { ChatBot } from "@/components/chats/chatBot";

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(Data.project.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


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
      <ChatBot/>
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
        className="flex bg-black items-center justify-center w-full flex-col px-4 py-16 sm:px-20 sm:py-20"
        ref={projectRef}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={isProjectVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Projects I've worked with.
          </h2>

          <div className="container mx-auto relative">
            {/* Desktop Layout - Buttons on sides */}
            <div className="hidden md:block">
              {/* Left Button */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 z-10"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right Button */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 z-10"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Mobile Layout - Buttons on top */}
            <div className="flex md:hidden justify-between items-center mb-4">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Projects Grid */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out md:px-0"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
                      {Data.project
                        .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                        .map((project, index) => (
                          <motion.div
                            className="h-full"
                            key={slideIndex * projectsPerSlide + index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isProjectVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                          >
                            <CardContainer className="w-full h-full" containerClassName="w-full h-full">
                              <a href={project.link} className="block h-full">
                                <CardBody className="bg-gradient-to-b from-zinc-900 to-slate-900 rounded-md p-4 w-full h-full flex flex-col hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                  <CardItem translateZ={20} className="w-full">
                                    <h1 className="text-white bg-gradient-to-b text-lg sm:text-lg md:text-xl lg:text-2xl font-sans font-bold mb-2 overflow-hidden text-ellipsis">
                                      {project.title}
                                    </h1>
                                  </CardItem>
                                  <CardItem translateZ={50} className="w-full flex-grow aspect-video">
                                    <img
                                      src={project.imageProj}
                                      alt={project.title}
                                      className="rounded-md w-full h-full object-cover"
                                    />
                                  </CardItem>
                                  <CardItem translateZ={20} className="w-full mt-2">
                                    <h3 className="text-neutral-200 text-sm line-clamp-2 h-10 overflow-hidden">
                                      {project.description}
                                    </h3>
                                    <div className="flex flex-wrap mt-2">
                                      {Object.values(project.techStack).map((tech, techIndex) => (
                                        <p key={techIndex} className="inline-block m-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md px-2 py-1 text-white text-xs">
                                          {tech}
                                        </p>
                                      ))}
                                    </div>
                                  </CardItem>
                                </CardBody>
                              </a>
                            </CardContainer>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Indicators - Bottom Center */}
            <div className="hidden md:flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                />
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
                duration={2400}
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
              <a href="https://www.instagram.com/vn_nshq/" className="text-pink-600 hover:text-pink-400  hover:scale-110 duration-300">
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