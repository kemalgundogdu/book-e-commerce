import React, { useEffect } from "react";
// router
import { NavLink } from "react-router";
// icons
import { GiFrostfire } from "react-icons/gi";
import { GiSunkenEye } from "react-icons/gi";
import { GiBrainTentacle } from "react-icons/gi";
import { GiChewedHeart } from "react-icons/gi";
import { GiUfo } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-35 h-26 justify-center">
        <NavLink
          to={"/category/romance"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiSunkenEye
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Romance</span>
        </NavLink>
        <NavLink
          to={"/category/fantasy"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiFrostfire
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Fantasy</span>
        </NavLink>
        <NavLink
          to={"/category/drama"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiChewedHeart
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Drama</span>
        </NavLink>
        <NavLink
          to={"/category/classic"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiWorld
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Classic</span>
        </NavLink>
        <NavLink
          to={"/category/fiction"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiUfo
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Fiction</span>
        </NavLink>
        <NavLink
          to={"/category/philosophy"}
          className={({ isActive }) =>
            `flex items-center justify-center flex-col gap-1 group ${
              isActive ? "text-[#fc5c50]" : ""
            }`
          }
        >
          <GiBrainTentacle
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Philosophy</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
