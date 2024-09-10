"use client";

import Image from "next/image";
import React, { useState } from "react";

import { motion } from "framer-motion";

const ProjectCard = ({ project, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full sm:w-1/2 h-1/2 md:w-1/3  p-4 [perspective:1000px] "
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
    >
      <div
        className="relative w-full h-64  transition-transform duration-500 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        <div className="absolute w-full h-full bg-cusred text-white p-1 [backface-visibility:hidden] rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={100}
            height={100}
            unoptimized={true}
            className="w-full h-full object-cover rounded-lg"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            {project.title}
          </h3>
        </div>
        <div className="absolute w-full h-full bg-cusgreen text-black p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.description}</p>
          <p className="text-sm mb-2">
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
