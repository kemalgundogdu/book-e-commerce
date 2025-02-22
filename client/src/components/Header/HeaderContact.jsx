import React from "react";
// router
import { Link } from "react-router";
// icons
import { MdOutlinePhoneInTalk } from "react-icons/md";

function HeaderContact() {
  return (
    <div className="bg-[#181818] w-full p-3 text-white text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5">
          <Link to="/" className="hover:opacity-80 transition-opacity">Find a Book Store</Link>
          <Link to="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <MdOutlinePhoneInTalk size={20} className="text-[#fc5c50]" /> +90
            123 345 6789
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderContact;
