import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsNavbar = ({ active }) => {
  return (
    <nav>
      <ul className="flex dark:text-white">
        <NavLink to="/projects">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="all" ? "!bg-slate-400" : ""}`}>
            All
          </li>
        </NavLink>
        <NavLink to="/projects/react">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="react" ? "!bg-slate-400" : ""}`}>
            React
          </li>
        </NavLink>
        <NavLink to="/projects/express">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="express" ? "!bg-slate-400" : ""}`}>
            Express
          </li>
        </NavLink>
        <NavLink to="/projects/next">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="next" ? "!bg-slate-400" : ""}`}>
            Next
          </li>
        </NavLink>
        <NavLink to="/projects/vanilla">
          <li className={`font-bold text-md md:text-xl p-1 md:p-2 text-white bg-[#FD6F00] mx-3 rounded-lg ${active==="vanilla" ? "!bg-slate-400" : ""}`}>
            Vanilla
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
