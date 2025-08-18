/**
 * Purpose: Text generation effect with pointer highlight on specific words
 * Features: Blur-to-clear word reveal followed by pointer highlight with no layout shifts
 */
"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { PointerHighlight } from "./pointer-highlight";

interface WordConfig {
  text: string;
  className?: string;
  highlight?: boolean;
}

export const TextGenerateWithHighlight = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.15,
  highlightDelay = 1000,
  onComplete,
}: {
  words: WordConfig[];
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
  highlightDelay?: number;
  onComplete?: () => void;
}) => {
  const [scope, animate] = useAnimate();
  const [showHighlight, setShowHighlight] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animateText = async () => {
      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(staggerDelay),
        }
      );
      
      setAnimationComplete(true);
      
      // Show highlight after delay
      setTimeout(() => {
        setShowHighlight(true);
        onComplete?.();
      }, highlightDelay);
    };

    animateText();
  }, [animate, duration, filter, staggerDelay, highlightDelay, onComplete]);

  const renderWords = () => {
    // Group consecutive highlight words
    const groupedWords: (WordConfig | WordConfig[])[] = [];
    let currentHighlightGroup: WordConfig[] = [];

    words.forEach((word, index) => {
      if (word.highlight) {
        currentHighlightGroup.push(word);
        // If next word is not highlight or we're at the end, close group
        if (index === words.length - 1 || !words[index + 1]?.highlight) {
          groupedWords.push([...currentHighlightGroup]);
          currentHighlightGroup = [];
        }
      } else {
        // Close any open highlight group
        if (currentHighlightGroup.length > 0) {
          groupedWords.push([...currentHighlightGroup]);
          currentHighlightGroup = [];
        }
        groupedWords.push(word);
      }
    });

    let spanIndex = 0;

    return (
      <motion.div ref={scope} className="inline">
        {groupedWords.map((item, groupIndex) => {
          if (Array.isArray(item)) {
            // Highlight group
            const highlightText = item.map(w => w.text).join(" ");
            const highlightClass = item[0]?.className;
            
            const content = item.map((word, wordIndex) => (
              <motion.span
                key={`highlight-${groupIndex}-${wordIndex}`}
                className={cn("dark:text-white text-black opacity-0", highlightClass)}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word.text}
                {wordIndex < item.length - 1 ? " " : " "}
              </motion.span>
            ));

            spanIndex += item.length;

            if (showHighlight && animationComplete) {
              return (
                <span key={`highlight-group-${groupIndex}`} className="inline">
                  <PointerHighlight 
                    containerClassName="inline-block"
                  >
                    <span className={cn("dark:text-white text-black", highlightClass)}>
                      {highlightText}
                    </span>
                  </PointerHighlight>
                  {" "}
                </span>
              );
            } else {
              return (
                <span key={`highlight-group-${groupIndex}`} className="inline">
                  {content}
                </span>
              );
            }
          } else {
            // Regular word
            const word = item;
            spanIndex++;
            return (
              <motion.span
                key={`word-${groupIndex}`}
                className={cn("dark:text-white text-black opacity-0", word.className)}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word.text}{" "}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="inline-block">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
