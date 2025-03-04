import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-start gap-1 mb-3">
      <NavLink
        to={"/admin/home"}
        className={({ isActive }) =>
          `bg-slate-200 px-4 py-2 rounded cursor-pointer hover:bg-white transition-colors ${
            isActive ? "bg-white" : ""
          }`
        }
      >
        <p>Dashboard</p>
      </NavLink>
      <NavLink
        to={"/admin/products"}
        className={({ isActive }) =>
          `bg-slate-200 px-4 py-2 rounded cursor-pointer hover:bg-white transition-colors ${
            isActive ? "bg-white" : ""
          }`
        }
      >
        <p>Products</p>
      </NavLink>
      <NavLink
        to={"/admin/orders"}
        className={({ isActive }) =>
          `bg-slate-200 px-4 py-2 rounded cursor-pointer hover:bg-white transition-colors ${
            isActive ? "bg-white" : ""
          }`
        }
      >
        <p>Orders</p>
      </NavLink>
      <NavLink
        to={"/admin/categories"}
        className={({ isActive }) =>
          `bg-slate-200 px-4 py-2 rounded cursor-pointer hover:bg-white transition-colors ${
            isActive ? "bg-white" : ""
          }`
        }
      >
        <p>Categorires</p>
      </NavLink>
      <NavLink
        to={"/admin/users"}
        className={({ isActive }) =>
          `bg-slate-200 px-4 py-2 rounded cursor-pointer hover:bg-white transition-colors ${
            isActive ? "bg-white" : ""
          }`
        }
      >
        <p>Users</p>
      </NavLink>
    </div>
  );
}

export default Navbar;
