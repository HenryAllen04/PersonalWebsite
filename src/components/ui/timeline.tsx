/**
 * Purpose: Complete timeline component for story page with sample data and scroll animations
 * Features: Animated progress line, responsive design, dark mode support, integrated content
 */
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  links?: {
    website?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
  };
}

// Link button component
const LinkButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
  >
    {icon}
    <span>{label}</span>
  </a>
);

// Icons
const WebsiteIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const data: TimelineEntry[] = [
    {
      title: "Becoming an Exited Founder!",
      subtitle: "August 2024",
      links: {
        website: "https://the20hr.co/",
        linkedin: "https://www.linkedin.com/posts/henry-allen-52868926b_20-hours-20k-exit-20-years-old-here-activity-7363170946574106624-BCKH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIhP7ABNUSHYD_rPoX7mfX6gz0pW4iU5N8",
        youtube: "https://youtu.be/NFlOEW9kEfk",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built, launched & sold The20hr.co in just 20 hours during a hackathon in Sweden! This incredible journey taught me the power of rapid execution and validated my entrepreneurial instincts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              key="group-photo-sweden"
              src="/timeline/groupphotosweden.jpeg"
              alt="Group photo from Sweden hackathon"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              key="sponsors-screenshot"
              src="/timeline/Screenshot 2025-08-18 at 17.00.37.png"
              alt="Sponsors and funding screenshot"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Winning In Paris! & YC",
      subtitle: "June 2024",
      links: {
        linkedin: "https://www.linkedin.com/in/henry-allen-52868926b/",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Achieved a major milestone by winning a prestigious competition in Paris and getting accepted into Y Combinator&apos;s program. This opened doors to Silicon Valley&apos;s startup ecosystem and invaluable mentorship.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <img
              key="paris-1"
              src="/timeline/paris1.jpeg"
              alt="Paris competition experience 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              key="paris-2"
              src="/timeline/paris2.jpeg"
              alt="Paris competition experience 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              key="paris-3"
              src="/timeline/paris3.jpeg"
              alt="Paris competition experience 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🏆 Won Paris Tech Competition
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Y Combinator Acceptance
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🌟 Silicon Valley Network Access
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Winning in Milan & Entrepreneur First",
      subtitle: "March 2024",
      links: {
        linkedin: "https://www.linkedin.com/in/henry-allen-52868926b/",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Secured victory in Milan&apos;s entrepreneurship challenge and joined Entrepreneur First, one of Europe&apos;s leading talent investor programs. This experience connected me with exceptional co-founders and deep tech opportunities.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              key="milan-1"
              src="/timeline/Milan1.jpeg"
              alt="Milan competition experience 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              key="milan-2"
              src="/timeline/Milan2.jpeg"
              alt="Milan competition experience 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🏆 Milan Competition Winner
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🤝 Entrepreneur First Cohort
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💡 Deep Tech Focus
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI for the London Marathon",
      subtitle: "April 2023",
      links: {
        github: "https://github.com/henryallen",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed an AI-powered application specifically for the London Marathon, combining my passion for technology with fitness. This project showcased real-world AI applications in sports and event management.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🤖 AI-Powered Marathon App
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🏃‍♂️ Sports Technology Integration
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📱 Real-time Event Management
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Move to London! + New Job",
      subtitle: "January 2023",
      links: {
        linkedin: "https://www.linkedin.com/in/henry-allen-52868926b/",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Made the big move to London and started a new role that would define my career trajectory. This transition marked my entry into London&apos;s vibrant tech scene and opened up incredible opportunities for growth.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🏙️ Relocated to London
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💼 New Career Opportunity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🌍 International Experience
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Scaling Voice AI",
      subtitle: "September 2022",
      links: {
        github: "https://github.com/henryallen",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Led the scaling efforts for voice AI technology, working on cutting-edge natural language processing and speech recognition systems. This role deepened my expertise in AI/ML and large-scale system architecture.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🎤 Voice AI Technology
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📈 Scaling Architecture
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🧠 NLP & Speech Recognition
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Travel & AI Engineering",
      subtitle: "June 2022",
      links: {
        linkedin: "https://www.linkedin.com/in/henry-allen-52868926b/",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Combined my love for travel with AI engineering, working on projects across different countries and cultures. This period taught me about global perspectives in technology and the importance of diverse problem-solving approaches.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✈️ International Projects
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🤖 AI Engineering Focus
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🌍 Cross-Cultural Collaboration
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Marketing Agency & College!",
      subtitle: "September 2020",
      links: {
        linkedin: "https://www.linkedin.com/in/henry-allen-52868926b/",
      },
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started my entrepreneurial journey by founding a marketing agency while still in college. This experience taught me the fundamentals of business, client management, and the importance of balancing academics with real-world experience.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🎓 College & Business Balance
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📊 Marketing Agency Founder
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💼 Client Management Skills
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full overflow-clip">
      <div
        className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-6xl font-bold text-black dark:text-white mb-6">
              The{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Changelog
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-xl rounded-lg"></div>
              </span>{" "}
              of Henry&apos;s Life
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A journey through the milestones, projects, and experiences that have shaped my path in technology and beyond.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-32 px-4 md:px-8 lg:px-10">
          {data.map((item, index) => (
            <div
              key={`timeline-${index}`}
              className="flex justify-start pt-16 md:pt-48 md:gap-12"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg text-neutral-400 dark:text-neutral-600 mt-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden block mb-6 text-left">
                  <h3 className="text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 dark:text-neutral-600 mt-1">
                    {item.subtitle}
                  </p>
                </div>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {item.content}
                </div>
                
                {/* Links Section */}
                {item.links && (
                  <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex flex-wrap gap-3">
                      {item.links.website && (
                        <LinkButton
                          href={item.links.website}
                          icon={<WebsiteIcon />}
                          label="Visit Website"
                        />
                      )}
                      {item.links.linkedin && (
                        <LinkButton
                          href={item.links.linkedin}
                          icon={<LinkedInIcon />}
                          label="LinkedIn"
                        />
                      )}
                      {item.links.github && (
                        <LinkButton
                          href={item.links.github}
                          icon={<GitHubIcon />}
                          label="GitHub"
                        />
                      )}
                      {item.links.youtube && (
                        <LinkButton
                          href={item.links.youtube}
                          icon={<YouTubeIcon />}
                          label="YouTube"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
