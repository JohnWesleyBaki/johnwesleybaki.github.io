"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Skeleton = () => (
  <div className=" w-[20rem] h-[15rem] relative shadow-2xl bg-transparent rounded-lg flex flex-col p-4">
    <div className="w-full h-3/4 bg-gray-400 rounded-lg mb-4 animate-pulse"></div>

    <div className="w-3/4 h-4 bg-gray-500 rounded-full mb-2 animate-pulse"></div>
    <div className="w-3/4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
  </div>
);

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

const ProjectsPage = () => {
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
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <Suspense fallback={<Skeleton />} key={project.title}>
              <ProjectCard project={project} delay={index * 0.25 + 2.5} />
            </Suspense>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Page = () => (
  <div className="h-screen w-full m-1 bg-black text-red-300 relative scrollable-cont">
    <div className="blob w-64 h-64 rounded-full absolute hidden md:visible"></div>
    <div className="text-center">
      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-cusred mb-8 mt-8">
        My Projects
      </h1>
    </div>
    <ProjectsPage />
  </div>
);

export default Page;
