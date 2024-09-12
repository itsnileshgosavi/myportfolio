"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";



let notifications = [
  {
    name: "Javascript",
    description: "Advanced",
    time: "15m ago",
    icon: "https://skillicons.dev/icons?i=js",
    color: "#00C9A7",
  },
  {
    name: "HTML",
    description: "Advanced",
    time: "10m ago",
    icon: "https://skillicons.dev/icons?i=html",
    color: "#FFB800",
  },
  {
    name: "CSS",
    description: "Advanced",
    time: "5m ago",
    icon: "https://skillicons.dev/icons?i=css",
    color: "#FF3D71",
  },
  {
    name: "Tailwind",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=tailwindcss",
    color: "#1E86FF",
  },
  {
    name: "React",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=react",
    color: "#1E86FF",
  },
  {
    name: "Next.js",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=nextjs",
    color: "#1E86FF",
  },
  {
    name: "Express",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=express",
    color: "#1E86FF",
  },
  {
    name: "React Native",
    description: "Intermediate",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=react",
    color: "#1E86FF",
  },
  {
    name: "Git",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=git",
    color: "#1E86FF",
  },
  {
    name: "GitHub",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=github",
    color: "#1E86FF",
  },
  {
    name: "Redux",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=redux",
    color: "#1E86FF",
  },
  {
    name: "TypeScript",
    description: "Intermediate",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=ts",
    color: "#1E86FF",
  },
  {
    name: "Mongo DB",
    description: "Advanced",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=mongodb",
    color: "#1E86FF",
  },
  {
    name: "PostgreSQL",
    description: "Intermediate",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=postgresql",
    color: "#1E86FF",
  },
  {
    name: "Vercel",
    description: "Intermediate",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=vercel",
    color: "#1E86FF",
  },
  {
    name: "GitLab",
    description: "Intermediate",
    time: "2m ago",
    icon: "https://skillicons.dev/icons?i=gitlab",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg"><img src={icon} alt="" /></span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function SkillList({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={1500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
