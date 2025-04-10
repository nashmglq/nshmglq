"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo({ techstack }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-4 border">
        <CardItem>
          <CardItem
            translateZ="80"
            className="w-full mt-6 flex flex-wrap justify-center"
          >
            {Object.values(techstack.logoUrl).map((icon) => (
              <div
    
                className="m-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={icon}
                  className="h-12 w-12 object-contain"
                />
              </div>
            ))}
          </CardItem>
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {techstack.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {techstack.description}
        </CardItem>

        <div className="flex justify-end items-center mt-8"></div>
      </CardBody>
    </CardContainer>
  );
}
