"use client";
import React from "react";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      className="fixed z-50 p-2.5 bg-transparent w-full h-20"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <motion.div
          className="flex items-center "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg
            width="60.201"
            height="81.901"
            viewBox="0 0 60.201 81.901"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="svgGroup"
              strokeLinecap="round"
              fillRule="evenodd"
              fontSize="9pt"
              stroke="#000"
              strokeWidth="0.25mm"
              fill="#db1010"
            >
              <path
                d="M 0 51.7 L 0 49.6 L 3 49.6 L 3 51.7 A 30.005 30.005 0 0 0 4.607 61.604 A 27.778 27.778 0 0 0 6.25 65.4 Q 9.5 71.6 15.55 75.25 Q 21.6 78.9 30.1 78.9 A 33.121 33.121 0 0 0 37.069 78.201 A 24.542 24.542 0 0 0 44.65 75.25 Q 50.7 71.6 53.95 65.4 A 28.711 28.711 0 0 0 57.171 53.095 A 33.803 33.803 0 0 0 57.2 51.7 L 57.2 0 L 60.2 0 L 60.2 51.7 Q 60.2 60 56.55 66.9 Q 52.9 73.8 46.2 77.85 Q 39.5 81.9 30.1 81.9 Q 20.8 81.9 14.05 77.85 Q 7.3 73.8 3.65 66.9 Q 0 60 0 51.7 Z M 6.6 51.7 L 6.6 49.6 L 9.6 49.6 L 9.6 51.7 A 23.908 23.908 0 0 0 10.518 58.415 A 21.153 21.153 0 0 0 11.95 62.05 Q 14.3 66.7 18.9 69.5 A 18.682 18.682 0 0 0 25.068 71.838 A 26.082 26.082 0 0 0 30.1 72.3 Q 36.8 72.3 41.35 69.5 Q 45.9 66.7 48.25 62.05 Q 50.6 57.4 50.6 51.7 L 50.6 0 L 53.6 0 L 53.6 51.7 A 26.667 26.667 0 0 1 52.416 59.736 A 24.174 24.174 0 0 1 50.85 63.55 Q 48.1 68.9 42.85 72.1 A 21.305 21.305 0 0 1 35.822 74.772 A 29.533 29.533 0 0 1 30.1 75.3 A 29.348 29.348 0 0 1 24.172 74.73 A 21.223 21.223 0 0 1 17.35 72.1 Q 12.1 68.9 9.35 63.55 A 25.105 25.105 0 0 1 6.643 53.307 A 29.756 29.756 0 0 1 6.6 51.7 Z M 13.2 51.7 L 13.2 49.6 L 16.2 49.6 L 16.2 51.7 A 16.981 16.981 0 0 0 16.974 56.92 A 14.454 14.454 0 0 0 19.5 61.6 A 10.2 10.2 0 0 0 24.306 64.858 Q 26.015 65.437 28.113 65.618 A 23.147 23.147 0 0 0 30.1 65.7 Q 37.4 65.7 40.7 61.6 A 14.894 14.894 0 0 0 43.934 53.308 A 19.2 19.2 0 0 0 44 51.7 L 44 0 L 47 0 L 47 51.7 A 20.66 20.66 0 0 1 46.28 57.235 A 18.094 18.094 0 0 1 45.15 60.25 Q 43.3 64.1 39.55 66.4 Q 35.8 68.7 30.1 68.7 A 23.405 23.405 0 0 1 26.099 68.377 Q 23.77 67.972 21.869 67.063 A 13.372 13.372 0 0 1 20.65 66.4 Q 16.9 64.1 15.05 60.25 A 18.921 18.921 0 0 1 13.265 53.433 A 22.742 22.742 0 0 1 13.2 51.7 Z"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>

          <svg
            width="93.2"
            height="80.4"
            viewBox="0 0 93.2 80.4"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white ml-2"
          >
            <g
              id="svgGroup"
              strokeLinecap="round"
              fillRule="evenodd"
              fontSize="9pt"
              stroke="#000"
              strokeWidth="0.25mm"
              fill="#10D36E"
            >
              <path
                d="M 36.9 80.4 L 33.8 80.4 L 13.6 0 L 16.7 0 L 36.9 80.4 Z M 30.1 80.4 L 27 80.4 L 6.8 0 L 9.9 0 L 30.1 80.4 Z M 23.3 80.4 L 20.2 80.4 L 0 0 L 3.1 0 L 23.3 80.4 Z M 57.1 0 L 38.8 73 L 37.2 66.7 L 54 0 L 57.1 0 Z M 93.2 0 L 74.9 72.8 L 73.4 66.6 L 90.1 0 L 93.2 0 Z M 73.1 80.4 L 70 80.4 L 55.3 22.1 L 56.9 15.8 L 73.1 80.4 Z M 50.3 0 L 35.3 59.6 L 33.8 53.5 L 47.2 0 L 50.3 0 Z M 86.4 0 L 71.6 59.2 L 70.1 53 L 83.3 0 L 86.4 0 Z M 66.4 80.4 L 63.3 80.4 L 52 35.3 L 53.5 29.2 L 66.4 80.4 Z M 43.5 0 L 31.9 46 L 30.5 39.7 L 40.4 0 L 43.5 0 Z M 79.6 0 L 68.1 45.6 L 66.6 39.4 L 76.5 0 L 79.6 0 Z M 59.6 80.4 L 56.5 80.4 L 48.5 48.8 L 50.1 42.5 L 59.6 80.4 Z"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </motion.div>
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Header;
