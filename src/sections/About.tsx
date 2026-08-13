import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import type { Mode } from "../data/content";

export default function About({mode}:{mode:Mode}) {
  return <section id="about" className={`section about ${mode}`}>
    <Reveal><p className="eyebrow">ABOUT / SAME PERSON, DIFFERENT MODE</p><h2>DESIGNER.<br/>EDITOR.<br/><em>BUILDER.</em></h2></Reveal>
    <div className="about-bottom"><p>I like making things that feel considered. Sometimes that means cutting a 30-second video until every beat lands. Sometimes it means turning a messy product idea into an interface that makes sense.</p><div className="about-stamps"><motion.span animate={{rotate:[-4,3,-4]}} transition={{duration:5,repeat:Infinity}}>CURIOUS</motion.span><motion.span animate={{rotate:[3,-3,3]}} transition={{duration:4,repeat:Infinity}}>ITERATE</motion.span><motion.span animate={{rotate:[-2,4,-2]}} transition={{duration:6,repeat:Infinity}}>SHIP</motion.span></div></div>
  </section>;
}