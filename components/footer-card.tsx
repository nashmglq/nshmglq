"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  const startAnimation = useCallback(() => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  }, [currentWord, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, duration);

    return () => clearInterval(interval);
  }, [startAnimation, duration]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      key={currentWord}
      className={cn(
        "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
        className
      )}
    >
      {currentWord.split(" ").map((word, wordIndex) => (
        <motion.span
          key={word + wordIndex}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: wordIndex * 0.3,
            duration: 0.3,
          }}
          className="inline-block whitespace-nowrap"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={word + letterIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3 + letterIndex * 0.05,
                duration: 0.9,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.div>
  );
};
