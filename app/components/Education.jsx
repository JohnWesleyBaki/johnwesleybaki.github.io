import React from "react";
import { motion } from "framer-motion";

function Education() {
  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 2 },
    },
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-2 flex-col"
    >
      <div className="bg-blue-400 h-[7rem] rounded-md text-black ">
        <h1 className="text-lg sm:text-xl  font-bold">
          Gayatri Vidya Parishad College of Engineering
        </h1>
        <h2 className="font-semibold">
          B.tech in Computer Science || 2018-2022
        </h2>
      </div>

      <div className="bg-blue-400 h-[7rem] rounded-md text-black">
        <h1 className="text-lg sm:text-xl  font-bold">
          Narayana Junior College
        </h1>
        <h2 className="font-semibold">
          Intermediate(High School) || 2016-2018
        </h2>
      </div>
    </motion.div>
  );
}

export default Education;
