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

const ProjectsPage = () => {
  const projects = [
    {
      title: "ReChat",
      description:
        "An instant messaging using socket.io which allows for a realtime communication with realtime db syncing.",
      image: "/images/chat.png",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      link: "https://github.com/JohnWesleyBaki/ReChat",
    },
    {
      title: "JobQuest",
      description:
        "A Job application portal which makes easier for recruiter to add jobs and find candidates and job seekers to find a job.",
      image: "/images/job.png",
      techStack: ["React", "TailWind"],
      link: "https://github.com/JohnWesleyBaki/jobquest",
    },
    {
      title: "AnimeList",
      description: "An Imdb for Animes.",
      image: "/images/anime.png",
      techStack: ["React", "Tailwind CSS", "AppWrite", "Framer-Motion"],
      link: "https://github.com/JohnWesleyBaki/Animelist",
    },
    {
      title: "Finance Dashboard",
      description: "An interactive finance dashboard using postgressql.",
      image: "/images/dashboard.png",
      techStack: ["NextJS", "PostGreSQL", "Tailwind"],
      link: "https://github.com/JohnWesleyBaki/dashboard",
    },
  ];

  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-wrap -mx-4 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={index * 0.25 + 2.5}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

function Page() {
  return (
    <div className="h-screen w-full m-1 bg-black text-red-300 relative scrollable-cont">
      <div className="blob w-64 h-64 rounded-full absolute "></div>
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-cusred mb-8 mt-8">
          My Projects
        </h1>
      </div>
      <ProjectsPage />
    </div>
  );
}

export default Page;
