import React from "react";
// router
import { Link } from "react-router";
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
        <Link to={'/category/romance'} className="flex items-center justify-center flex-col gap-1 group">
          <GiSunkenEye
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Romance</span>
        </Link>
        <Link to={'/category/fantasy'} className="flex items-center justify-center flex-col gap-1 group">
          <GiFrostfire
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Fantasy</span>
        </Link>
        <Link to={'/category/drama'} className="flex items-center justify-center flex-col gap-1 group">
          <GiChewedHeart
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Drama</span>
        </Link>
        <Link to={'/category/classic'} className="flex items-center justify-center flex-col gap-1 group">
          <GiWorld
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Classic</span>
        </Link>
        <Link to={'/category/fiction'} className="flex items-center justify-center flex-col gap-1 group">
          <GiUfo
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Fiction</span>
        </Link>
        <Link to={'/category/philosophy'} className="flex items-center justify-center flex-col gap-1 group">
          <GiBrainTentacle
            size={44}
            className="group-hover:scale-[0.8] transition-all group-hover:text-[#fc5c50]"
          />
          <span>Philosophy</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
