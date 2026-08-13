import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Noise from "./components/Noise";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import VideoWork from "./sections/VideoWork";
import UIUXWork from "./sections/UIUXWork";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { useMode } from "./hooks/useMode";

export default function App() {
  const [mode, setMode] = useMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  return <main className={mode}>
    <Noise/><CustomCursor/>
    <AnimatePresence>{loading && <motion.div className="loader" initial={{opacity:1}} exit={{opacity:0}}><span>SAMAYRAN</span><b>01</b></motion.div>}</AnimatePresence>
    <Nav mode={mode} onChange={setMode}/>
    <AnimatePresence mode="wait">
      <motion.div key={mode} initial={{opacity:0, filter:"blur(8px)"}} animate={{opacity:1,filter:"blur(0px)"}} exit={{opacity:0,filter:"blur(8px)"}} transition={{duration:.38}}>
        <Hero mode={mode}/>
        {mode === "video" ? <VideoWork/> : <UIUXWork/>}
        <About mode={mode}/>
        <Contact/>
      </motion.div>
    </AnimatePresence>
    <div className="progress" />
  </main>;
}