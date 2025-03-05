import React, { useRef, useState } from "react";
// router
import { NavLink, useNavigate } from "react-router";
// icons
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/Auth";

function HeaderUp() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/s/${encodeURIComponent(query)}`);
    }
    setQuery("");
    inputRef.current.blur();
  };

  // login control
  const user = useSelector(selectUser);
  const linkDestination = user ? "/profile" : "/login";

  return (
    <div className="bg-white h-24 border-b-[1px] border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="cursor-pointer">
          <NavLink to="/">
            <img src="http://localhost:5173/assets/logo.svg" width={150} alt="book store logo" />
          </NavLink>
        </div>
        <div className="flex items-center">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="s"
              ref={inputRef}
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-2xl bg-[#f6f6f6] w-xl py-3 px-4 outline-none text-sm focus:placeholder:text-transparent border border-transparent focus:border-slate-200"
              placeholder="Search products..."
            />
            <button
              type="submit"
              className="-ml-10 cursor-pointer hover:text-[#fc5c50] transition-colors"
            >
              <IoIosSearch size={24} />
            </button>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to={linkDestination}
            className={({ isActive }) =>
              `cursor-pointer hover:bg-gray-100 hover:text-[#fc5c50] transition-colors rounded-full p-3 ${
                isActive ? "bg-gray-100 text-[#fc5c50]" : ""
              }`
            }
          >
            <FiUser size="20" className="cursor-pointer" />
          </NavLink>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              `cursor-pointer hover:bg-gray-100 hover:text-[#fc5c50] transition-colors rounded-full p-3 ${
                isActive ? "bg-gray-100 text-[#fc5c50]" : ""
              }`
            }
          >
            <BsCart2 size="20" className="cursor-pointer" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderUp;
