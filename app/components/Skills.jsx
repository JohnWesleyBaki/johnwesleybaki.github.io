import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { id: "c", svgpath: "/svgs/c.svg", title: "C" },
    { id: "cpp", svgpath: "/svgs/cpp.svg", title: "C++" },
    { id: "java", svgpath: "/svgs/java.svg", title: "Java" },
    { id: "html", svgpath: "/svgs/html.svg", title: "HTML" },
    { id: "css", svgpath: "/svgs/css.svg", title: "CSS" },
    { id: "javascript", svgpath: "/svgs/js.svg", title: "JavaScript" },
    { id: "python", svgpath: "/svgs/python.svg", title: "Python" },
    { id: "r", svgpath: "/svgs/r.svg", title: "R" },
    { id: "react", svgpath: "/svgs/react.svg", title: "React" },
    { id: "nodejs", svgpath: "/svgs/nodejs.svg", title: "Node.js" },
    { id: "express", svgpath: "/svgs/express.svg", title: "Express JS" },
    { id: "mongodb", svgpath: "/svgs/mongodb.svg", title: "MongoDB" },
    { id: "django", svgpath: "/svgs/django.svg", title: "Django" },
    { id: "sqlite", svgpath: "/svgs/sqlite.svg", title: "SQLite" },
    { id: "android", svgpath: "/svgs/android.svg", title: "Android" },
    { id: "tailwind", svgpath: "/svgs/tailwind.svg", title: "Tailwind CSS" },
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
    <div className="h-80 scrollable-container p-4">
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={parentVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <Image
              src={skill.svgpath}
              alt={skill.title}
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-center text-sm font-medium text-cusgreen">
              {skill.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
