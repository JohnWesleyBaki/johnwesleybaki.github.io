"use client";
import { useState } from "react";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Tools from "../components/Tools";

const TabLayout = () => {
  const tabs = [
    { id: "skills", label: "Skills", content: <Skills /> },
    { id: "education", label: "Education", content: <Education /> },
    { id: "experience", label: "Experience", content: <Experience /> },
    { id: "tools", label: "Tools", content: <Tools /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-center items-center">
      {/* Sidebar with vertical tabs */}
      <div className="w-40 md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300 ski">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`block w-20   py-2 mb-2 rounded sm:w-40  ${
              activeTab === tab.id
                ? "bg-cusgreen text-black"
                : "bg-cusred text-white"
            }`}
          >
            <h3 className="text-xs sm:text-base text-center">{tab.label}</h3>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="w-full md:w-3/4 p-4 h-80 ">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="h-screen w-full m-1 bg-black text-red-300 flex flex-col items-center justify-center relative ">
      <div className="blob w-64 h-64 rounded-full top-0 absolute right-0 hidden md:visible"></div>
      <div className="text-center flex flex-col items-center p-4 relative">
        <h1 className="text-lg sm:text-2xl md:text-4xl  text-cusred font-bold mt-4  mb-4 ">
          About Me
        </h1>
        <div className="flex justify-center w-full p-4">
          <p className="text-xs sm:text-sm mt-2 md:text-base lg:text-lg  leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl">
            I&apos;m a software engineer specializing in frontend development,
            dedicated to building efficient, high-performance user interfaces
            with minimal memory leaks and optimized rendering. Eager to broaden
            my expertise, I&apos;m also interested in contributing to backend
            systems and various stages of tech development to drive innovation
            and deliver scalable solutions.
          </p>
        </div>

        <TabLayout />
      </div>
    </div>
  );
}
