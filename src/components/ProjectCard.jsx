import { useTheme } from "./Theme-Provider";
import { FadeText } from "./magicui/fade-text";
import { Github, TvMinimalPlay } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import ShineBorder from "./magicui/shine-border";
import { Button } from "./ui/button";
import StackList from "./StackList";

export function ProjectCard(props) {
  const { theme } = useTheme();
  return (
    <div className="h-[500px] w-[350px] m-3">
      <MagicCard
        className="cursor-pointer h-full w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
       <div className="flex flex-col justify-between h-full w-full group">
       <div className="w-full h-[90%] space-y-5">
       <img
          src={props.image}
          alt="project thumbnail"
          className="w-full h-[200px] group-hover:scale-105 transition-all ease-in-out duration-300"
        />
        <FadeText
          text={props.name}
          framerProps={{
            show: { transition: { delay: 0.6 } },
          }}
          className={"text-2xl font-bold pl-2 uppercase"}
        />
        <StackList stack={props.technologies} />
        <FadeText
          text={props.description}
          framerProps={{
            show: { transition: { delay: 0.6 } },
          }}
          className="text-sm mt-5 text-wrap text-center h-10"
        />
       </div>
        <div className="flex justify-evenly space-x-2 h-[10%]">
          <a href={props.github}>
            <Button>
              <Github />
            </Button>
          
          </a>
          <a href={props.live}>
          <Button>
              <TvMinimalPlay />
            </Button>
          </a>
        </div>
       </div>
      </MagicCard>
    </div>
  );
}
