import React from "react";
// slider
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
// icons
import { MdOutlineArrowForward } from "react-icons/md";

function Slider() {
  return (
    <div className="bg-[url(./assets/background.jpg)] bg-red-500 px-5 py-10 min-h-[578px] bg-no-repeat bg-cover flex items-center">
      <div className="w-full p-5 bg-[#fbf0e6] rounded">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide className="p-3">
            <div className="flex items-center justify-center gap-20">
              <div className="flex flex-col items-start ml-0 md:ml-30">
                <span className="text-sm text-slate-400 uppercase mb-8">
                  The Best of 2024
                </span>
                <h1 className="font-semibold text-5xl">
                  Meet Your Next <br /> Favorite Book.
                </h1>
                <span className="text-slate-500 text-sm line-through mt-4">
                  Original Price: 48.56$
                </span>
                <span className="font-semibold text-3xl text-[#fc5c50]">
                  $48.50
                </span>
                <button className="px-5 py-3 rounded-lg border flex items-center gap-2 mt-3 cursor-pointer group transition-all hover:bg-white">
                  Shop Now{" "}
                  <MdOutlineArrowForward
                    size={20}
                    className="transition-all group-hover:text-[#fc5c50] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0"
                  />
                </button>
              </div>
              <div className="pr-20 h-98">
                <img src="./assets/book1.png" alt="book" className="h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="flex items-center justify-center gap-20">
              <div className="flex flex-col items-start ml-0 md:ml-30">
                <span className="text-sm text-slate-400 uppercase mb-8">
                  Editor Choice
                </span>
                <h1 className="font-semibold text-5xl">
                  Our Sci-Fi & <br /> Fantasy Picks
                </h1>
                <span className="text-slate-500 text-sm line-through mt-4">
                  Original Price: 48.56$
                </span>
                <span className="font-semibold text-3xl text-[#fc5c50]">
                  $48.50
                </span>
                <button className="px-5 py-3 rounded-lg border flex items-center gap-2 mt-3 cursor-pointer group transition-all hover:bg-white">
                  Shop Now{" "}
                  <MdOutlineArrowForward
                    size={20}
                    className="transition-all group-hover:text-[#fc5c50] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0"
                  />
                </button>
              </div>
              <div className="pr-20 h-98">
                <img src="./assets/book2.png" alt="book" className="h-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
