/**
 * Purpose: Main landing page with navbar and Aurora background hero section
 * Features: Resizable navbar with Aurora background hero, modern design
 */
"use client";
import { SharedNavbar } from "@/components/shared-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateWithHighlight } from "@/components/ui/text-generate-with-highlight";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3";
import Timeline from "@/components/ui/timeline";
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
          <button 
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 font-medium hover:scale-105 transition-transform cursor-pointer"
          >
            View my work
          </button>
        </motion.div>
      </AuroraBackground>
      


      {/* Story/Timeline Section */}
      <section id="story" className="bg-white dark:bg-neutral-950">
        <Timeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-neutral-950">
        <FeaturesSectionDemo />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white dark:bg-gray-900 p-8 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Let's Connect</h2>
          <p className="text-lg dark:text-gray-300 mb-8 leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, or just have a great conversation about technology and entrepreneurship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/henry-allen-52868926b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:henry@henryallen.me" 
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
