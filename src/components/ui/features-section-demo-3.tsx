/**
 * Purpose: Features section component for displaying projects in a grid layout
 * Features: Interactive project cards with animations, globe visualization, responsive design
 */
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "The20hr.co - Rapid Startup",
      description:
        "Built, launched & sold a company in just 20 hours during a hackathon in Sweden. A testament to rapid execution and market validation.",
      skeleton: <SkeletonStartup />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "AI-Powered Marathon App",
      description:
        "Developed an AI application for the London Marathon, combining sports technology with machine learning for real-time event management.",
      skeleton: <SkeletonAI />,
      className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
    },
    {
      title: "Voice AI Scaling",
      description:
        "Led the scaling efforts for voice AI technology, working on cutting-edge NLP and speech recognition systems.",
      skeleton: <SkeletonVoiceAI />,
      className:
        "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Marketing Agency",
      description:
        "Founded and ran a successful marketing agency while in college, managing multiple clients and learning business fundamentals.",
      skeleton: <SkeletonMarketing />,
      className: "col-span-1 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Y Combinator Experience",
      description:
        "Accepted into Y Combinator's prestigious program, gaining access to Silicon Valley's startup ecosystem and world-class mentorship.",
      skeleton: <SkeletonYC />,
      className: "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Tech Content Creation",
      description:
        "Creating educational content about technology, entrepreneurship, and AI through videos, tutorials, and social media.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Global Competitions",
      description:
        "Won prestigious tech competitions in Paris and Milan, representing innovation in AI and entrepreneurship on international stages.",
      skeleton: <SkeletonCompetitions />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "International Impact",
      description:
        "Working across different countries and cultures, from London to Sweden, building solutions that transcend geographical boundaries.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Projects & Expertise
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From AI engineering to full-stack development, I build solutions that bridge technology and human needs. 
          Here&apos;s what I focus on in my work.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonStartup = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-lg font-bold">20hr.co</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonAI = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-2xl font-bold">🏃‍♂️ AI</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonVoiceAI = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-xl font-bold">🎤 Voice AI</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonMarketing = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-lg font-bold">📊 Marketing</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonYC = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-xl font-bold">YC</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonCompetitions = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <div className="h-full w-full bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 rounded-sm flex items-center justify-center">
            <div className="text-white text-lg font-bold">🏆 Competitions</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=NFlOEW9kEfk"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <div className="h-full w-full bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 rounded-sm blur-none group-hover/image:blur-md transition-all duration-200 flex items-center justify-center">
            <div className="text-white text-lg font-bold opacity-50">Tech Content</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const technologies = [
    "React",
    "Node.js", 
    "Python",
    "TypeScript",
    "Next.js"
  ];

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <motion.div
            key={`tech-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {tech}
          </motion.div>
        ))}
      </div>
      
      <div className="w-full h-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
        <div className="text-white text-lg font-bold">Full Stack</div>
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // London
        { location: [51.5074, -0.1278], size: 0.1 },
        // Paris
        { location: [48.8566, 2.3522], size: 0.08 },
        // Milan
        { location: [45.4642, 9.1900], size: 0.06 },
        // San Francisco
        { location: [37.7749, -122.4194], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};