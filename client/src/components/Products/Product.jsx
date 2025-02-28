import React from "react";
// router
import { Link } from "react-router";
// icons
import { MdOutlineArrowForward } from "react-icons/md";
// slugify
import slugify from 'react-slugify';

function Product({ book }) {
  return (
    <div>
      <Link to={'/book/' + slugify(book.slug)}>
        <img
          className="rounded-2xl transition-all w-full object-cover hover:scale-[0.95] mb-3 h-70"
          src={book.image}
          alt={book.name}
        />
      </Link>
      <Link to={'/book/' + slugify(book.slug)}>
        <h3 className="font-semibold text-md">{book.name}</h3>
      </Link>
      <span className="text-sm text-gray-600 block">{book.author}</span>
      <span className="text-lg font-semibold text-[#fc5c50] block mt-1">
        ${book.price}
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
