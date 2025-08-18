/**
 * Purpose: Text generation effect with blur-to-clear animation
 * Features: Word-by-word reveal with blur effect, customizable timing
 */
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  let wordsArray = words.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: filter ? "blur(10px)" : "none",
    },
  };

  const renderWords = () => {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              variants={child}
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
