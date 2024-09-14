import { cn } from "@/lib/utils";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Particles from "@/components/magicui/particles";
import { useTheme } from "@/components/Theme-Provider";
import { useEffect, useState } from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { FadeText } from "@/components/magicui/fade-text";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export default function Home() {
  const { theme } = useTheme();// get theme from context
  const [color, setColor] = useState("#ffffff");// maintaining color state to change color of particles

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg border bg-background  p-20 md:shadow-xl space-x-10">
      <ShineBorder
        className="mb-10 md:rounded-full w-72 h-72 p-0 overflow-hidden border md:shadow-xl"
        color={["#FD6F00", "#FE8FB5", "#FFBE7B"]}
      >
        <img
          src="https://avatars.githubusercontent.com/u/109579816?v=4"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </ShineBorder>
      <div className="z-10 flex justify-center flex-col items-start whitespace-pre-wrap text-left font-medium tracking-tighter text-black  dark:text-white space-y-3">
        <GradualSpacing text={"Hello, I am"} />
        <GradualSpacing
          text={"Nilesh Gosavi"}
          className={"text-2xl text-[#FD6F00]"}
        />
        <TypingAnimation
          text={"Full Stack Developer"}
          duration={50}
          className={"text-lg md:text-4xl"}
        />
        <FadeText
          text="Dedicated Full Stack Developer specializing in the MERN stack, passionate about contributing to open-source projects and"
          className="text-md dark:text-gray-100 text-start"
        />
        <FadeText
          text="continuously expanding technical skills."
          className="text-md dark:text-gray-100 text-start"
        />

        <div className="flex items-center space-x-5">
        <a
          href="https://drive.google.com/file/d/1PaA_NjeQ81bxLs64YQFr1iDMpumGrZHT/view?usp=sharing"
          target="_blank"
        >
          <ShimmerButton className="my-5 dark:text-white border-1 shadow-2xl justify-self-end"
          ShimmerColor="#FD6F00"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Download Resume
            </span>
          </ShimmerButton>
        </a>
        <Link to="/about">
          <Button className="py-4 md:py-6 bg-[#FD6F00] text-md md:text-lg hover:bg-orange-800 rounded-3xl">More About Me</Button>
        </Link>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
