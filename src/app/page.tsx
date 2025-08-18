/**
 * Purpose: Main landing page with navbar and Aurora background hero section
 * Features: Resizable navbar with Aurora background hero, modern design
 */
"use client";
import { SharedNavbar } from "@/components/shared-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateWithHighlight } from "@/components/ui/text-generate-with-highlight";
import { motion } from "framer-motion";

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
          <h2 className="text-4xl font-bold mb-8 dark:text-white">About</h2>
          <p className="text-lg dark:text-gray-300 mb-8">
            Welcome to my personal website. I'm a developer and entrepreneur passionate about building innovative solutions.
          </p>
          
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Projects</h2>
          <p className="text-lg dark:text-gray-300 mb-8">
            Here are some of the projects I've worked on...
          </p>
          
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Contact</h2>
          <p className="text-lg dark:text-gray-300">
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </div>
      </div>
    </div>
  );
}
