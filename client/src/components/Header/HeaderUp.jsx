import React from "react";
// router
import { Link } from "react-router";
// icons
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

function HeaderUp() {
  return (
    <div className="bg-white h-24 border-b-[1px] border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div>
          <Link to="/">
            <img
              src="../assets/logo.svg"
              width={150}
              alt="book store logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="rounded-2xl bg-[#f6f6f6] w-xl py-3 px-4 outline-none text-sm focus:placeholder:text-transparent border border-transparent focus:border-slate-200"
            placeholder="Search products..."
          />
          <button className="-ml-10 cursor-pointer hover:text-[#fc5c50] transition-colors">
            <IoIosSearch size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Link className="cursor-pointer hover:bg-gray-100 hover:text-[#fc5c50] transition-colors rounded-full p-3">
            <FiUser size="20" />
          </Link>
          <Link className="cursor-pointer hover:bg-gray-100 hover:text-[#fc5c50] transition-colors rounded-full p-3">
            <BsCart2 size="20" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderUp;
