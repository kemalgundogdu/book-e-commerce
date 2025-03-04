import React from "react";
// link
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:space-x-16 lg:space-x-reverse text-gray-700">
        {/* Text Section */}
        <div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
          <header className="mb-6">
            <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
              404.
            </h2>
            <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
              Sorry, we couldn't find this page.
            </h3>
          </header>

          <p className="max-w-sm mb-5 leading-5 md:leading-7">
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>

          <Link
            to="/"
            className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-[#fc5c50] border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-[#fc5c50] hover:bg-[#c6443b] cursor-pointer"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Modern SVG Icon */}
        <div className="max-w-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-full max-w-sm"
            width="400"
          >
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="stop-color:text-blue-500" />
                <stop offset="100%" className="stop-color:text-purple-500" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="stop-color:text-gray-200" />
                <stop offset="100%" className="stop-color:text-gray-400" />
              </linearGradient>
            </defs>

            {/* Floating Broken Cube */}
            <rect
              x="60"
              y="60"
              width="80"
              height="80"
              rx="8"
              className="fill-none stroke-[4] stroke-gray-600 transform rotate-12"
            />
            <path
              d="M90 90 L110 70 M110 130 L130 110"
              className="stroke-[4] stroke-gray-500"
            />
            {/* Broken piece */}
            <path
              d="M130 110 L150 130 Q155 135 150 140 L130 140 Z"
              className="fill-[url(#grad2)] stroke-[2] stroke-gray-500"
            />

            {/* 404 Text with Gradient */}
            <text
              x="43"
              y="133"
              className="fill-[url(#grad1)] font-bold text-[40px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              404
            </text>

            {/* Floating Particle Effects */}
            <circle
              cx="40"
              cy="40"
              r="4"
              className="fill-blue-400 opacity-75"
            />
            <circle
              cx="160"
              cy="50"
              r="3"
              className="fill-purple-400 opacity-75"
            />
            <circle
              cx="50"
              cy="150"
              r="5"
              className="fill-blue-500 opacity-50"
            />

            {/* Subtle Shadow */}
            <ellipse
              cx="100"
              cy="180"
              rx="40"
              ry="10"
              className="fill-gray-300 opacity-30 blur-sm"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
