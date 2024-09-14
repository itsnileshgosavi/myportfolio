import GradualSpacing from "@/components/magicui/gradual-spacing";
import IconCloud from "@/components/magicui/icon-cloud";
import { SkillList } from "@/components/skilllist";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function Skills() {
  return (
    <div className="flex justify-center flex-col ">
      <h1 className="text-4xl dark:text-white my-5">
        <GradualSpacing text="My Skills" />
      </h1>
      <div className="flex justify-around flex-col md:flex-row">
        <div className="order-last">
          <SkillList />
        </div>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
