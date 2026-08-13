import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { videoProjects } from "../data/content";

const tones: Record<string,string> = { violet:"linear-gradient(135deg,#151022,#6e48ff 45%,#f5b4ff)", orange:"linear-gradient(135deg,#160e0a,#e85b27 55%,#ffd18a)", cyan:"linear-gradient(135deg,#071416,#00a6b4 55%,#d2ffff)", pink:"linear-gradient(135deg,#180b16,#c52f82 55%,#ffc3e4)" };

export default function VideoWork() {
  return <section id="work" className="section work video-work">
    <Reveal><div className="section-top"><p className="eyebrow">SELECTED WORK / VIDEO</p><span>04 PROJECTS</span></div><h2>MAKE IT<br/><em>HIT.</em></h2></Reveal>
    <div className="project-grid video-grid">{videoProjects.map((p,i)=><Reveal key={p.title} delay={i*.05}><motion.article className="video-card" whileHover={{ y:-8 }} data-cursor="PLAY">
      <div className="media-placeholder" style={{background:tones[p.tone]}}><div className="media-noise"/><span className="project-number">{p.tag}</span><div className="play-circle"><Play fill="currentColor" size={20}/></div><div className="timeline"><span/><span/><span/><span/><span/></div></div>
      <div className="project-meta"><div><p className="small">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p></div><ArrowUpRight size={19}/></div>
      <div className="software">{p.software}</div>
    </motion.article></Reveal>)}</div>
    <div className="philosophy"><div><p className="eyebrow">EDITING PHILOSOPHY</p><h3>PACE IS A<br/><span>DESIGN TOOL.</span></h3></div><p>I cut for attention, not noise. Every transition, silence, hit and frame has a job — make the story clearer, sharper and harder to forget.</p></div>
    <div className="tools-row"><p className="eyebrow">TOOLS / EVERYDAY WEAPONS</p><div>{["PREMIERE PRO","AFTER EFFECTS","DAVINCI RESOLVE","PHOTOSHOP"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div></div>
  </section>;
}