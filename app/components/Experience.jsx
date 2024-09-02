import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className=" max-w-md  scrollable-container">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="bg-blue-400  rounded-md text-black "
      >
        <h1 className="text-2xl font-bold">Harman Connected Services</h1>
        <h2 className="text-lg font-semibold mt-1">
          Software Engineer || April 2022 — August 2023
        </h2>
        <ul className="ml-1 text-sm">
          <li>
            Developed and maintained HAL (Hardware Abstraction Layer) interfaces
            for Android system components.
          </li>
          <li>
            Created and stabilized AIDL (Android Interface Definition Language)
            interfaces for HALs.
          </li>
          <li>
            Integrated SCP and OpenSSH for secure file transfers between ECU and
            USB flash drives.
          </li>
          <li>
            Developed and optimized Android applications for automotive
            interfaces using Java.
          </li>
          <li>
            Designed a component with RTOS APIs to manage and track version
            information for car components.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Experience;
