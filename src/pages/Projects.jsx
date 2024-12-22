import GradualSpacing from "@/components/magicui/gradual-spacing";
import { ProjectCard } from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects } from "@/lib/mockdata";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
function Projects() {
  const { pathname } = useLocation();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [active, setActive] = useState("all"); //maintaining active state to change the styling of navbar items
  useEffect(() => {
    if (pathname === "/projects") {
      setFilteredProjects(projects); //setting filtered projects based on pathname
      setActive("all");
    } else if (pathname === "/projects/react") {
      setFilteredProjects(
        projects.filter((project) => project.category === "react")
      );
      setActive("react");
    } else if (pathname === "/projects/express") {
      setFilteredProjects(
        projects.filter((project) => project.category === "express")
      );
      setActive("express");
    } else if (pathname === "/projects/next") {
      setFilteredProjects(
        projects.filter((project) => project.category === "nextjs")
      );
      setActive("next");
    } else if (pathname === "/projects/vanilla") {
      setFilteredProjects(
        projects.filter((project) => project.category === "vanilla")
      );
      setActive("vanilla");
    }
  }, [pathname]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-16">
      <div className="text-4xl font-bold my-10 dark:text-white">
        <GradualSpacing text="My Projects" />
      </div>
      <ProjectsNavbar active={active} />
      <div className="flex flex-wrap mt-10 justify-center">
        {filteredProjects.map((project, idx) => (
          <BlurFade key={project.id} delay={0.25 + idx * 0.05} inView>
            <ProjectCard
              id={project.id}
              name={project.name}
              description={project.description}
              github={project.github}
              image={project.image}
              technologies={project.technologies}
              live={project.live}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
export default Projects;
