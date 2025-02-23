import React from "react";
// router
import { Link } from "react-router";
// icons
import { MdOutlineArrowForward } from "react-icons/md";

function Product() {
  return (
    <div>
      <Link>
        <img
          className="rounded-2xl transition-all w-full object-cover hover:scale-[0.95] mb-3"
          src="https://m.media-amazon.com/images/I/51V+t0oCWUL._SY445_SX342_.jpg"
          alt="book"
        />
      </Link>
      <Link>
        <h3 className="font-semibold text-md">The Book of Bill</h3>
      </Link>
      <span className="text-sm text-gray-600 block">Alex Hirsch</span>
      <span className="text-lg font-semibold text-[#fc5c50] block mt-1">
        $36.40
      </span>
      <button className="pr-5 py-3 flex items-center gap-2 cursor-pointer group transition-all hover:bg-white text-md">
        Add to Cart{" "}
        <MdOutlineArrowForward
          size={20}
          className="transition-all group-hover:text-[#fc5c50] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0"
        />
      </button>
    </div>
  );
}

export default Product;
