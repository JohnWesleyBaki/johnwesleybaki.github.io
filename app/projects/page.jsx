"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Skeleton = () => (
  <div className="relative w-72 space-y-3 overflow-hidden rounded-md bg-red-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
    <div className="h-36 w-full rounded-lg bg-white-600"></div>
    <div className="space-y-3">
      <div className="h-5 w-8/12 rounded-full bg-neutral-600"></div>
    </div>
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
    <div className="blob w-64 h-64 rounded-full absolute"></div>
    <div className="text-center">
      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-cusred mb-8 mt-8">
        My Projects
      </h1>
    </div>
    <ProjectsPage />
  </div>
);

export default Page;
