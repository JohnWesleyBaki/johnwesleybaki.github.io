// pages/about.js
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
    <div className="flex flex-col md:flex-row h-full w-full">
      {/* Sidebar with vertical tabs */}
      <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`block w-full text-left px-4 py-2 mb-2 rounded ${
              activeTab === tab.id
                ? "bg-cusgreen text-black"
                : "bg-cusred text-white"
            }`}
          >
            {tab.label}
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
    <div className="h-screen w-full m-1 bg-black text-red-300 flex flex-col items-center justify-center relative">
      <div className="blob w-64 h-64 rounded-full top-0 absolute right-0"></div>
      <div className="text-center flex flex-col items-center p-4">
        <h1 className="text-3xl md:text-4xl sm:text-2xl text-cusred font-bold mt-1 md:pd-6 mb-2 md:mb-6">
          About Me
        </h1>
        <div className="flex justify-center w-full p-4">
          <p className="max-w-full sm:max-w-2xl md:max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
            I express my ideas and views without any hesitation or bias. I want
            to be in a place where my opinions are valued or at least
            considered, criticized but not ignored. Technology is the one tool
            that makes a huge impact on humanity instantly and I want to be part
            of it.
          </p>
        </div>

        <TabLayout />
      </div>
    </div>
  );
}
