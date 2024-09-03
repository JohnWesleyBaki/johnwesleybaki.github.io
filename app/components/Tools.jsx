import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Tools() {
  const tools = [
    { id: "git", svgpath: "/svgs/git.svg", title: "Git" },
    { id: "github", svgpath: "/svgs/github.svg", title: "Github" },
    { id: "vscode", svgpath: "/svgs/vscode.svg", title: "VS Code" },
    { id: "appwrite", svgpath: "/svgs/appwrite.svg", title: "App Write" },
    { id: "supabase", svgpath: "/svgs/supabase.svg", title: "Supabase" },
  ];

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="h-80  scrollable-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={parentVariants}
        className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5"
      >
        {tools.map((tool) => (
          <motion.div
            variants={itemVariants}
            key={tool.id}
            className="flex flex-col items-center"
          >
            <Image
              src={tool.svgpath}
              alt={tool.title}
              width={60}
              height={60}
              className="mb-2 w-10 h-10"
            />
            <span className="text-center text-sm font-medium text-cusgreen">
              {tool.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tools;
