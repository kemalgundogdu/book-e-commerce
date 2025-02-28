import React, { useState } from "react";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// icons
import { BsCart2 } from "react-icons/bs";
// router
import { Link } from "react-router";

function Home() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto py-8 font-sans">
        {/* book detail page */}
        <div className="flex gap-5 w-full items-start justify-between">
          <div className="p-7 w-full md:w-2/5 rounded-2xl border border-[#E6E6E6]">
            <img
              src="https://m.media-amazon.com/images/I/91frmC4DsqL._SY522_.jpg"
              alt="book"
              className="w-full object-cover"
            />
          </div>
          <div className="p-7 w-full md:w-3/5 rounded-2xl border border-[#E6E6E6]">
            <div className="border-b border-[#E6E6E6] pb-5">
              <h1 className="font-semibold text-2xl">
                Tales of Japan: Traditional Stories of Monsters and Magic
              </h1>
              <div className="flex items-center gap-5">
                <p className="text-sm text-[#666666]">
                  <span className="opacity-60">by</span> Chronicle Books
                </p>
                <p className="text-sm text-[#666666]">
                  <span className="opacity-60">SKU:</span> 7364673467
                </p>
              </div>
            </div>
            <div className="py-5">
              {/* price */}
              <p className="text-3xl font-semibold text-[#FF4C29] mb-4">
                $19.99
              </p>
              <p className="text-sm text-[#666666]">
                The rich tradition of Japan's storytelling is reimagined in this
                dark and thrilling collection. Each story is a fresh and
                relevant retelling that will appeal to readers of all ages.
              </p>
            </div>
            <div className="flex items-center gap-5">
              {/* quantity */}
              <div className="flex items-start">
                <div className="flex justify-start flex-col gap-1">
                  <p className="text-sm text-[#666666] opacity-60">Quantity</p>
                  <div className="flex items-center gap-5 border border-[#E6E6E6] rounded-3xl">
                    <button
                      className="cursor-pointer px-5 py-3 hover:bg-[#FF4C29] hover:text-white rounded-l-3xl"
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <p className="text-sm w-6 text-center font-bold">
                      {quantity}
                    </p>
                    <button
                      className="cursor-pointer px-5 py-3 hover:bg-[#FF4C29] hover:text-white rounded-r-3xl"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* add to cart */}
              <button className="bg-[#FF4C29] text-white py-3 px-5 rounded-3xl mt-5 flex items-center gap-3 cursor-pointer border border-transparent hover:bg-[#ff2a00] hover:border-[#333333] transition-colors">
                <BsCart2 size="20" />
                Add to Cart
              </button>
            </div>
            <p className="text-sm mt-5">
              <span className="opacity-60 text-[#666666]">Category: </span>{" "}
              <Link className="text-[#333333] font-semibold">Fiction</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
