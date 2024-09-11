import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsNavbar = ({ active }) => {
  return (
    <nav>
      <ul className="flex dark:text-white">
        <NavLink to="/projects">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="all" ? "!bg-[#2f219a]" : ""}`}>
            All
          </li>
        </NavLink>
        <NavLink to="/projects/react">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="react" ? "!bg-[#2f219a]" : ""}`}>
            React
          </li>
        </NavLink>
        <NavLink to="/projects/express">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="express" ? "!bg-[#2f219a]" : ""}`}>
            Express
          </li>
        </NavLink>
        <NavLink to="/projects/next">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="next" ? "!bg-[#2f219a]" : ""}`}>
            Next
          </li>
        </NavLink>
        <NavLink to="/projects/vanilla">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="vanilla" ? "!bg-[#2f219a]" : ""}`}>
            Vanilla
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
