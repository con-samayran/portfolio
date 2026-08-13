import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Visual2D from "../components/Visual2D";
import type { Mode } from "../data/content";

export default function Hero({ mode }: { mode: Mode }) {
  const video = mode === "video";
  return <section id="top" className={`hero ${mode}`}>
    <div className="hero-grid" />
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity:0 }} animate={{opacity:1}} transition={{delay:.25}}>SAMAYRAN / 01 — CREATIVE IDENTITY</motion.p>
      <motion.h1 initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{delay:.35,duration:.8,ease:[.22,1,.36,1]}}>
        I TURN IDEAS<br/><span>INTO <i>{video ? "VISUALS." : "INTERFACES."}</i></span>
      </motion.h1>
      <motion.p className="hero-sub" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.75}}>
        {video ? "Video editor / motion-minded storyteller." : "UI/UX designer / product-minded builder."}
      </motion.p>
      <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
        <a className="btn btn-solid" href="#work" data-cursor="VIEW">EXPLORE WORK <ArrowUpRight size={17}/></a>
        <a className="text-link" href="#contact" data-cursor="GO">LET'S TALK</a>
      </motion.div>
    </div>
    <Visual2D mode={mode}/>
    <div className="hero-foot"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/><span className="hero-mode">{video ? "EDITOR MODE" : "DESIGN MODE"}</span></div>
    {video && <div className="impact-word">FRAME<br/>BY<br/>FRAME</div>}
    {!video && <div className="grid-label">SYSTEM_01<br/>LAYOUT / 12 COL</div>}
  </section>;
}