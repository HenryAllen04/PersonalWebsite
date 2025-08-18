/**
 * Purpose: Main landing page with navbar and Aurora background hero section
 * Features: Resizable navbar with Aurora background hero, modern design
 */
"use client";
import { SharedNavbar } from "@/components/shared-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateWithHighlight } from "@/components/ui/text-generate-with-highlight";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <SharedNavbar />
      
      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <TextGenerateWithHighlight
              words={[
                { text: "I'm", className: "text-3xl md:text-7xl font-bold dark:text-white" },
                { text: "Henry", className: "text-3xl md:text-7xl font-bold dark:text-white", highlight: true },
                { text: "Allen", className: "text-3xl md:text-7xl font-bold dark:text-white", highlight: true },
                { text: "and", className: "text-3xl md:text-7xl font-bold dark:text-white" },
                { text: "welcome", className: "text-3xl md:text-7xl font-bold dark:text-white" },
                { text: "to", className: "text-3xl md:text-7xl font-bold dark:text-white" },
                { text: "my", className: "text-3xl md:text-7xl font-bold dark:text-white" },
                { text: "website", className: "text-3xl md:text-7xl font-bold dark:text-white" },
              ]}
              className="text-3xl md:text-7xl"
              duration={0.6}
              staggerDelay={0.3}
              highlightDelay={1200}
            />
          </div>
          
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            Where code meets creativity.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 font-medium hover:scale-105 transition-transform">
            View my work
          </button>
        </motion.div>
      </AuroraBackground>
      
      {/* Temporary content to test navbar scroll effects */}
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>This is temporary content to test the navbar scroll effects. Scroll up and down to see the navbar resize and show blur effects.</p>
            <p>The navbar should:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start full width when at the top</li>
              <li>After scrolling 100px, shrink to 40% width on desktop</li>
              <li>Show backdrop blur and shadow effects</li>
              <li>Animate smoothly between states</li>
            </ul>
            <p>Keep scrolling to test more...</p>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


