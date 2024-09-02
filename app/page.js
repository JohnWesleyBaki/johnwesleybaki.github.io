"use client";
import { useEffect, useState,useRef } from "react";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./projects/page";
import Contact from "./contact/page";
import About from "./about/page"



export default function Home() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  const AboutRef = useRef(null);
  const ContactRef = useRef(null);

  const createTile = (index) => (
    <div key={index} className="tile" />
  );

  const createTiles = (quantity) => {
    return Array.from({ length: quantity }, (_, i) => createTile(i));
  };

  const createGrid = () => {
    const size = window.innerWidth > 800 ? 100 : 50;
    setColumns(Math.floor(window.innerWidth / size));
    setRows(Math.floor(window.innerHeight / size));
  };

  useEffect(() => {
    createGrid();
    window.addEventListener("resize", createGrid);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLanding(true), 100);
    }, 1000);

    return () => {
      window.removeEventListener("resize", createGrid);
      clearTimeout(loadingTimer);
    };
  }, []);


 const ScrollToAbout = ()=>{
// if(AboutRef.current){
//   AboutRef.current.scrollIntoView({behaviour:"smooth",})
// }
window.scrollTo({
  top: 770, 
  behavior: 'smooth',
});
 }

 const ScrollToContact =()=>{
  // if(ContactRef.current){
  //   ContactRef.current.scrollIntoView({behaviour:"smooth",})
  // }

  window.scrollTo({
    top: 2400, 
    behavior: 'smooth',
  });
 }

  return (
    <div>
      
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl text-blue-50">Loading..</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && showLanding && (
         <>
         <motion.div
           id="tiles"
           style={{ "--columns": columns, "--rows": rows }}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1 }}
           className="absolute top-0 left-0 w-full h-full grid grid-cols-[var(--columns)] grid-rows-[var(--rows)] z-0"
         >
           {createTiles(columns * rows)}
         </motion.div>
         <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-transparent absolute inset-0 flex items-center justify-center z-20 p-4 md:p-6 lg:p-8"
    >
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <h2 className="text-cyan-400 text-2xl md:text-3xl">Hey </h2>
          <Image
            unoptimized={true}
            alt="waving-hand"
            width={30}
            height={30}
            src="/svgs/waving-hand.gif"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-cusred mb-4 font-bold">
          I'm <span className="font-dancing-script text-cusgreen">John Wesley</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-inter">
          A Software Engineer based in India
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-fuchsia-400 mt-4">
          “An honest, optimistic, unfiltered, and creative developer, full of ideas and facts."
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            className="text-white bg-cusred rounded-md py-2 px-4 text-lg md:text-xl"
            onClick={ScrollToAbout}
          >
            About Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            className="text-white bg-cusred rounded-md py-2 px-4 text-lg md:text-xl"
            onClick={ScrollToContact}
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </motion.div>
       </>
       
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && showLanding && (
          <motion.div
            className="next-page relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div ref={AboutRef} id="about">
             <About/>
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div ref={ContactRef} id="contact">
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
