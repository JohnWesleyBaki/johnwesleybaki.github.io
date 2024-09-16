"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function SideBar() {
  return (
    <div className="h-25 w-10 bottom-2 left-2 bg-transparent fixed z-50 text-white flex flex-col justify-between hidden sm:flex ">
      <Link href="https://github.com/JohnWesleyBaki/" target="_blank">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            src="/svgs/github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="mb-2"
          />
        </motion.button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/john-wesley-baki/"
        target="_blank"
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            src="/svgs/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="mb-2"
          />
        </motion.button>
      </Link>
    </div>
  );
}

export default SideBar;
